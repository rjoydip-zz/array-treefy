'use strict'

class ArrayTree {
	constructor() {
		this.dept = 0
		this._tree = ''
	}

	tree(ele) {
		ele.forEach((item, key) => {
			Array.isArray(item) ?
				(++this.dept, this.tree(item)) :
				this._tree += `${key === 0 ?
					'└──'.padStart(this.dept * 7, ' ') :
					key === (ele.length - 1) ?
						'└──'.padStart(this.dept * 7, ' ') :
						'├──'.padStart(this.dept * 7, ' ')} ${item}\n`
		})
		return this._tree
	}
}


module.exports = Object.assign(new ArrayTree(), { ArrayTree })