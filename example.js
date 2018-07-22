const arrayTree = require('.')

console.log(
	'Demo 1 \n',
	arrayTree([
		1, 2, [3, 4, 5],
		6, 7
	], 'x0')
)

console.log(
	'Demo 2 \n',
	arrayTree([
		1, 2, [3, 4, 5],
		6, 7
	], '')
)
