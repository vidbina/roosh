env:
	PATH=${PATH}:node_modules/.bin

test:
	mocha test.js

.PHONY: env test
