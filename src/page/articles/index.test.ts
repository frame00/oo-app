import * as assert from 'assert'
import page from './index'
import {readFileSync} from 'fs'
import relPath from '../../lib/test/rel-path'
import compress from '../../lib/compress'

describe('GET:/articles', () => {
	describe('GET:/articles/terms', () => {
		it('Returns terms page', () => {
			const html = page(['articles', 'terms'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/articles/terms.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 200)
		})
	})

	describe('GET:/articles/privacy', () => {
		it('Returns privacy page', () => {
			const html = page(['articles', 'privacy'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/articles/privacy.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 200)
		})
	})

	describe('GET:/articles/law', () => {
		it('Returns law page', () => {
			const html = page(['articles', 'law'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/articles/law.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 200)
		})
	})

	describe('When it is an unexpected path, returns 404', () => {
		it('When name not found', () => {
			const html = page(['articles'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})

		it('When unexpected name', () => {
			const html = page(['articles', 'xxx'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})

		it('When exists third path', () => {
			const html = page(['articles', 'tems', 'yyy'])
			const snapshot = readFileSync(relPath('../../../test/snapshots/404.html'), 'utf-8')
			assert.equal(compress(html.body), compress(snapshot))
			assert.equal(html.status, 404)
		})
	})
})
