import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('GET:/sign', () => {
	it('Returns sign-in page', () => {
		const html = page(['sign'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/sign.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	it('When it is an unexpected path, returns 404', () => {
		const html = page(['sign', 'xxx'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 404)
	})
})
