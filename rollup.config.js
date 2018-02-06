import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-transform-postcss'
import multiEntry from 'rollup-plugin-multi-entry'
import json from 'rollup-plugin-json'
import md from 'rollup-plugin-md'
import importcss from 'postcss-import'
import cssnext from 'postcss-cssnext'
import precss from 'precss'

const {BUILD_MODE} = process.env

let input
let file
let plugins = [
	typescript(),
	commonjs({
		include: 'node_modules/**'
	}),
	resolve({
		jsnext: true,
		preferBuiltins: false
	}),
	postcss({
		plugins: [importcss, precss, cssnext]
	}),
	json(),
	md()
]

switch(BUILD_MODE) {
	case 'TEST':
		input = 'src/**/*.test.ts'
		file = 'dist/test.js'
		plugins =  [multiEntry()].concat(plugins)
		break
	default:
		input = 'src/lambda.ts'
		file = 'dist/lambda.js'
		break
}

export default {
	external: ['aws-sdk', 'fs', 'assert'],
	input,
	output: {
		file,
		name: 'ooapp',
		format: 'umd',
		globals: {
			'aws-sdk': 'AWS',
			'fs': 'fs',
			'assert': 'assert'
		}
	},
	plugins
}
