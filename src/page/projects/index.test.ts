import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('GET:/projects', () => {
	it('Returns projects list page', () => {
		const html = page(['projects'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/projects.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When exists second path', () => {
			const html = page(['projects', 'xxx'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})
})