# array-tree [![Build Status](https://travis-ci.org/rjoydip/array-tree.svg?branch=master)](https://travis-ci.org/rjoydip/array-tree)

> Display array in tree view

## Install globally

```
$ npm i -g array-tree
```

## Install locally

```
$ npm i --save array-tree
```

## Use Programmatically

```js
const arrayTree = require("array-tree")
arrayTree([1, 2, [3, 4, 5], 6, 7], "x0")
```

## Global usage

```bash
$ array-tree "[1,2, [3,4], 5, [6, [7,8], 9], 10]" --label="xo"
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

### arrayTree(data [, label])

Returns a string.

#### data

Type: `Array`

##### label

Type: `string`<br>
Default: `--`

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/array-tree/blob/master/license.md)
