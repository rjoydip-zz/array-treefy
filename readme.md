# array-treefy [![Build Status](https://travis-ci.org/rjoydip/array-treefy.svg?branch=master)](https://travis-ci.org/rjoydip/array-treefy)

> Display array in tree view

## Install globally

```
$ npm i -g array-treefy
```

## Install locally

```
$ npm i --save array-treefy
```

## Use Programmatically

```js
const arrayTreefy = require("array-treefy")
arrayTree([1, 2, [3, 4, 5], 6, 7], "x0")
```

## Global usage

```bash
$ array-treefy "[1,2, [3,4], 5, [6, [7,8], 9], 10]" --label="xo"
```

### Output

```bash
xo
├── 1
├── 2
├─┬ xo
│ ├── 3
│ └── 4
├── 5
├─┬ xo
│ ├── 6
│ ├─┬ xo
│ │ ├── 7
│ │ └── 8
│ └── 9
└── 10
```

## API

### arrayTreefy(data [, label])

Returns a string.

#### data

Type: `Array`

##### label

Type: `string`<br>
Default: `--`

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/array-treefy/blob/master/license.md)
