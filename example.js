const arrayTree = require('.')

console.log(
	arrayTree.tree([
		1, 2,
		[ 3, 4, 5 ],
		6, 7
	])
)