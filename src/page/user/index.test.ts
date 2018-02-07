import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('GET:/:UID', () => {
	it('Returns ask page', () => {
		const html = page(['xxx'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/ask.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When uid not found', () => {
			const html = page([])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})
})

describe('GET:/:UID/projects', () => {
	it('Returns public projects page', () => {
		const html = page(['xxx', 'projects'])
		const snapshot = readFileSync(relPath('../../../test/snapshots/user/projects.html'), 'utf-8')
		assert.equal(compress(html.body), compress(snapshot))
		assert.equal(html.status, 200)
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When unexpected third path', () => {
			const html = page(['xxx', 'yyy'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})
})
