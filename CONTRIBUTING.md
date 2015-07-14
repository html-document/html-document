# Contributing

I'd love for you to contribute ! Here some guidelines and documentation.

## Installation

```
git clone git@github.com:christophehurpeau/html-document.git
cd html-document
npm install
```

## [springbokjs-library](https://github.com/christophehurpeau/springbokjs-library#springbokjs-library-)

A common library to manage all my packages, contains tasks and common config files. You can find there a [list of available tasks](https://github.com/christophehurpeau/springbokjs-library/blob/master/README.md#to-code)

## Babel and es6

I write code in es6 in the `src` directory, transpiled with babel to `lib`.
Use the task `make build` or `make watch` to transpile the code.

## Coding Rules

I use eslint and jscs to ensure a common coding style. I mostly follow the [Airbnb coding style](https://github.com/airbnb/javascript/blob/master/README.md) except for this points:

- 4 spaces indentation (instead of 2)
- Maximum line length is 120
- Always use `{ }` to delimit blocks
- Don't use `void`
- You can declare multiple var one the same line if there are all undefined (`let i, j;`)
- `"` is allowed to escape `'`: `"'hi'"` is more readable than `'\'hi\''`

You can check the code by running the task `make lint`. With an editor, install the plugins to validate the code as you type !

## Documentation

I use [jsdoc](http://usejsdoc.org/) to document the code and [generate the api](https://christophehurpeau.github.io/html-document/docs/).
I also use `istanbul` to [generate the coverage](https://christophehurpeau.github.io/html-document/coverage/lcov-report/).
You can generate the documentation with `make docs`, a shortcut for `make api tests-coverage`

## Tests

Tests are in the directory `tests/src`, transpiled with babel to `tests/lib`. Use the task `make tests` to run the tests.
Compilation to `tests/lib` is done by `make build` or `make watch`.
Prefer to follow the structure in `tests/src` like `src` and tests each file.
