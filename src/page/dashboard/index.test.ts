import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('GET:/dashboard', () => {
	it('Returns dashboard page', () => {
		const html = page(['dashboard'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/dashboard.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	it('When it is an unexpected path, returns 404', () => {
		const html = page(['dashboard', 'xxx'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 404)
	})
})
