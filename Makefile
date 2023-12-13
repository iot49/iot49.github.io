.PHONY: build build-all publish clean

SHELL           := /bin/bash


# incrementally build, output in docs/_build/html
build:
	jupyter-book build docs

# rebuild entire doc (not just changes)
build-all:
	jupyter-book build --all docs

publish:
	ghp-import -n -p -f docs/_build/html

clean:
	@rm -rf docs/_build

