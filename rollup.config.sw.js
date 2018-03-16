import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import replace from 'rollup-plugin-replace'

const plugins = [
	typescript(),
	commonjs({
		include: 'node_modules/**'
	}),
	resolve({
		jsnext: true,
		preferBuiltins: false
	}),
	replace({
		delimiters: ['<@', '@>'],
		CACHE: (Math.floor(Math.random()*10000000000)),
	})
]

export default {
	input: 'src/assets/script/sw/worker.ts',
	output: {
		file: 'dist/sw.js',
		name: 'ooapp-sw',
		format: 'umd'
	},
	plugins
}
