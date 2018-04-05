import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'
import redirectToUser from '../../template/redirect-to-user'

describe('GET:/projects/:uid', () => {
	it('Returns redirect page', () => {
		const html = page(['projects', 'xxx'])
		const results = redirectToUser()
		assert.equal(compress(html.body), compress(results))
		assert.equal(html.status, 200)
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When not exists second path', () => {
			const html = page(['projects'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})

		it('When exists third path', () => {
			const html = page(['projects', 'xxx', 'yyy'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})
})

describe('GET:/projects/tag/:tag', () => {
	it('Returns tagged projects list page', () => {
		const html = page(['projects', 'tag', 'xxx'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/projects/tagged.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When not exists third path', () => {
			const html = page(['projects', 'tag'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})

		it('When exists fourth path', () => {
			const html = page(['projects', 'tag', 'xxx', 'yyy'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})
})
