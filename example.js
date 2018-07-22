const arrayTreefy = require('.')

console.log(
	'Demo 1 \n',
	arrayTreefy([
		1, 2, [3, 4, 5],
		6, 7
	], 'x0')
)

console.log(
	'Demo 2 \n',
	arrayTreefy([
		1, 2, [3, 4, 5],
		6, 7
	], '')
)
