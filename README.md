# babel-plugin-require coverage bug

### Case 1: plugin off

```
npm run coverage
# or with retainLines: true
BABEL_ENV=lines npm run coverage

# Result on both cases
-----------|----------|----------|----------|----------|----------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
  index.js |      100 |      100 |      100 |      100 |                |
-----------|----------|----------|----------|----------|----------------|
```


### Case 2: retainLines: false / plugin enabled

Coverage reports an additional branch not tested:

```
BABEL_ENV=plugin npm run coverage

# Result
-----------|----------|----------|----------|----------|----------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
  index.js |      100 |       50 |      100 |      100 |                |
-----------|----------|----------|----------|----------|----------------|
```


### Case 3: retainLines: true / plugin enabled

Situation is even worse. Coverage says there are statements, branches and functions not tested.

```
BABEL_ENV=linesplugin npm run coverage

-----------|----------|----------|----------|----------|----------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
  index.js |    65.28 |       32 |     37.5 |      100 |                |
-----------|----------|----------|----------|----------|----------------|

```
