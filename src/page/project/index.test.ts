import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('GET:/project/:UID', () => {
	it('Returns project detail page', async () => {
		const html = await page(['project', 'xxx'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/project.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When uid not found', async () => {
			const html = await page(['project'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})

		it('When exists third path', async () => {
			const html = await page(['project', 'xxx', 'yyy'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})
})
