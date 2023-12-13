from iot_device.pydevice import Pydevice
from iot_device.serial_device import SerialDevice
from serial import Serial
import subprocess, os, time


if os.getenv('BALENA_DEVICE_ARCH') == 'aarch64':
    # only on rpi, not x86
    from gpiozero import LED as Pin

    def hard_reset(boot_mode=False, quiet=True, dev='/dev/ttyAMA1'):
        """Hard reset STM32. Same as pressing reset button.
        
        @param boot_mode: bool Start in "dfu" boot-mode (default False).
        """
        # twiddle pins
        with Pin(21) as nrst, Pin(27) as boot0:
            time.sleep(0.1)
            if boot_mode:
                boot0.on()
            else:
                boot0.off()
            time.sleep(0.1)
            nrst.off()
            time.sleep(0.1)
            nrst.on()
        # swallow boot message
        with Serial(dev, 115200, timeout=0.3, exclusive=False) as serial:
            time.sleep(0.2)
            if not quiet: print('BOOT> ', end='')
            while serial.in_waiting:
                data = serial.read(serial.in_waiting)
                if not quiet: 
                    data = data.replace(b'\n', b'\n    > ')
                    try:
                        data = data.decode()
                    except UnicodeDecodeError:
                        print("not unicode!")
                    print(data, end='')
                time.sleep(0.3)
            if not quiet: print()
else:
    def hard_reset(boot_mode=False, quiet=True, dev='/dev/ttyAMA1'):
        pass
        
def _flash_bin(address, firmware, dev, info_only):
    """Flash helper. Used by flash method."""
    if info_only:
        cmd = ['stm32flash', dev]
    else:
        cmd = ['stm32flash', '-v', '-S', address, '-w', firmware, dev]
    process = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    stdout, stderr = process.communicate()
    print(stdout.decode())
    if len(stderr) > 0:
        print(f"***** {stderr.decode()}")

def flash(firmware_dir='$IOT/mp/micropython/ports/stm32/build-MOTOR_HAT/', dev='/dev/ttyAMA2', info_only=False):
    """Flash MicroPython VM.
    
    @param firmware_dir Location of firmware.
    @param dev Device port.
    @param info_only Dry run if True (default False).
    """
    dir = os.path.expandvars(firmware_dir)
    hard_reset(boot_mode=True)
    _flash_bin('0x08000000', os.path.join(dir, 'firmware0.bin'), dev, info_only)
    _flash_bin('0x08020000', os.path.join(dir, 'firmware1.bin'), dev, info_only)
    hard_reset(boot_mode=False) 

def exec(cmd, url='serial:///dev/ttyAMA1'):
    """Execute MicroPython code on STM32.

    @param cmd: string Code.
    """
    with SerialDevice(url) as repl:
        res = repl.exec(cmd)
        try:
            res = res.decode()
        except:
            pass
        return res
    
def exec_no_follow(cmd, dev='/dev/ttyAMA1'):
    """Execute MicroPython code on STM32 & do not wait for result."""
    with Serial(dev, 115200, timeout=0.5, write_timeout=2, exclusive=False) as serial:
        pyd = Pydevice(serial)
        pyd.enter_raw_repl()
        pyd.exec_raw_no_follow(cmd)
        time.sleep(0.2)
        while serial.in_waiting:
            data = serial.read(serial.in_waiting)
            try:
                data = data.decode()
            except:
                pass
            print(f"*** MCU: {data}")
            time.sleep(0.1)

def rsync(url='serial:///dev/ttyAMA1'):
    print("stm32.rsync")
    with SerialDevice(url) as repl:
        print("repl =", repl)
        repl.rsync(data_consumer=lambda x: print(x, end=''), dry_run=False, upload_only=False)
        print("rsynced")

def rlist(url='serial:///dev/ttyAMA1'):
    with SerialDevice(url) as repl:
        repl.rlist(data_consumer=lambda x: print(x, end=''), show=True)

def supply_voltage():
    """Report unregulated supply voltage in [V] (nominally 12V)."""
    return float(exec(
"""
from pyb import ADC

adc = pyb.ADC('V12_DIV')
print(0.00655233*adc.read())
"""))
    
def power_off(delay=10):
    """Turn off 5V power supply to Raspberry PI & STM32.

    @param delay: float Delay in seconds before turning power off.

    Warning: make sure Raspberry PI is shutdown before calling this!
    """
    print(f"shutting down ...")
    exec_no_follow(
f"""
from pyb import Pin
from time import sleep

# declaring as input first sets the initial value after configuring as output
shut_dn = Pin('PWR_EN', mode=Pin.IN, pull=Pin.PULL_UP)
shut_dn.value(1)
shut_dn = Pin('PWR_EN', mode=Pin.OUT_OD)
sleep({delay})
shut_dn.value(0)
""")
    os.system("sudo halt")
