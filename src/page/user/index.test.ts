import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('GET:/:UID', () => {
	it('Returns ask page', async () => {
		const html = await page(['xxx'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/ask.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When uid not found', async () => {
			const html = await page([])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})

		it('When unexpected third path', async () => {
			const html = await page(['xxx', 'yyy'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})

	describe('Slug', () => {
		it('"/JEKAgXAqHmqC0jBoH2zc8l7E" to "/aggre"', async () => {
			const response = await page(['JEKAgXAqHmqC0jBoH2zc8l7E'])
			assert.equal(response.status, 301)
			assert.equal(response.headers.Location, '/aggre')
		})

		it('"/aggre" as "/JEKAgXAqHmqC0jBoH2zc8l7E"', async () => {
			const html = await page(['aggre'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/aggre.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 200)
		})
	})
})
