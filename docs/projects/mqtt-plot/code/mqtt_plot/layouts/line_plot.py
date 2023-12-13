from bokeh.plotting import figure
from bokeh.layouts import column
from bokeh.palettes import Category10_10 as palette
from bokeh.models import Label
import itertools


def layout(data_source, figure_args):
    column_names = data_source.column_names
    
    figure_defaults = {
        'x_axis_label': column_names[0],
        'plot_width': 800,
        'plot_height': 500, 
    }
    try:
        fig = figure(**{**figure_defaults, **figure_args})
    except AttributeError:
        fig = figure(**figure_defaults)
    
    colors = itertools.cycle(palette)
    for y_name, color in zip(column_names[1:], colors):
        fig.line(column_names[0], y_name, source=data_source, \
                 legend_label=y_name, color=color)

    fig.legend.location = "top_left"
    fig.legend.click_policy = "hide"

    return column(fig)
