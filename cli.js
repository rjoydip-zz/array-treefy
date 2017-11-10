#!/usr/bin/env node

const arrayTree = require('.')
const meow = require('meow')
const chalk = require('chalk')

const logger = console

module.exports = (async () => {
	const cli = meow(`
        ${chalk.yellow('Usage')}
            $ array-tree

        ${chalk.yellow('Options')}
            --help,     -h  Get help
            --version,  -v  Get version

        ${chalk.yellow('Examples')}
            $ array-tree
            $ array-tree --help
            $ array-tree --version
    `)

	if (cli.input.length) {
		if (cli.input[0] === ('version' || '--version' || '--v' || '-v')) {
			const pkg = require('./package')
			logger.log(`${pkg.name} version ${chalk.green(`v${pkg.version}`)}`)
		} else {
			arrayTree.tree(cli.input[0])
		}
	} else {
		logger.log(chalk.red('Invalid argument'))
	}

})()