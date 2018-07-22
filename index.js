'use strict'

const archy = require('archy')
const array2Archy = require('array-to-archy')

module.exports = (ele, label) => {
	return archy(array2Archy(ele, label))
}
