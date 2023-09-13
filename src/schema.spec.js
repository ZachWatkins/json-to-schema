/**
 * Specification for the found-types module.
 * @author Zachary K. Watkins <zwatkins.it@gmail.com>
 * @year 2023
 */

import { Schema } from './schema'
import { mockData } from '../__fixtures__/inputs.js'
import { mockFile } from '../__fixtures__/outputs.js'

describe('Schema', () => {
    it('provides a schema for each property', () => {
        const schema = new Schema(mockData)
    })
    it('provides file contents', () => {
        const schema = new Schema(mockData)
        expect(schema.toFile()).toBe(mockFile)
    })
})
