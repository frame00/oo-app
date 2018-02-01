import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('404', () => {
	it('Returns 404 page', () => {
		const html = page()
		const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 404)
	})
})
