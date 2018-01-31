import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import postcss from 'rollup-plugin-transform-postcss'
import cssnext from 'postcss-cssnext'
import precss from 'precss'

export default {
	external: ['aws-sdk'],
	globals: {
		'aws-sdk': 'AWS'
	},
	input: 'src/index.ts',
	output: {
		file: 'dist/index.js',
		name: 'ooapp',
		format: 'umd'
	},
	plugins: [
		typescript(),
		commonjs({
			include: 'node_modules/**'
		}),
		resolve({
			jsnext: true,
			preferBuiltins: false
		}),
		postcss({
			plugins: [precss, cssnext]
		})
	]
}
