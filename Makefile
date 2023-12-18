.PHONY: build build-all publish clean serve leaf

SHELL           := /bin/bash


# incrementally build, output in docs/_build/html
build:
	jupyter-book build docs

# rebuild entire doc (not just changes)
build-all:
	jupyter-book build --all docs

# access at https://iot49.org/leaf.html
# chrome: enable insecure origin in chrome://flags/
#         e.g. add ws://10.0.9.177
publish:  # clean build-all leaf
	ghp-import -n -p -f docs/_build/html

clean:
	@rm -rf docs/_build

serve: build leaf
	@echo serving at http://localhost:8000/leaf.html
	cd docs/_build/html; \
	python -m http.server

leaf:
  # Cannot get frontend/src/vite.config.ts base to work (ignored)
	# workaround: publish to /
	# access http://localhost:8000/leaf.html
	# rsync -av --delete ./leaf ./docs/_build/html
	cp ./leaf/index.html ./leaf/leaf.html
	rsync --exclude 'index.html' -av ./leaf/ ./docs/_build/html
	cp ../frontend/serviceworker.js ./docs/_build/html
