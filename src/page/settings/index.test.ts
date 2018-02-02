import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('GET:/settings', () => {
	it('Returns setting page', () => {
		const html = page(['setting'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/settings.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When exists second path', () => {
			const html = page(['settings', 'xxx'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})
})
