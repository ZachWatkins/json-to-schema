import { get, getFile } from './index.js'
import { mockData } from '../__fixtures__/inputs.js'
import { mockFile } from '../__fixtures__/outputs.js'

describe('get', () => {
    it('should return an object', () => {
        const schema = get(mockData)
        expect(typeof schema).toBe('object')
        expect(schema == null).toBe(false)
    })
    it('should return a schema object', () => {
        const schema = get(mockData)
        expect(Object.keys(schema)).toEqual([
            'id',
            'city',
            'state',
            'year',
            'visited',
            'resided',
            'population',
            'area',
            'latitude',
            'longitude',
            'rating',
        ])
        // Confirm the default schema output.
        expect(schema).toEqual({
            id: { type: 'number', required: true },
            city: { type: 'string', required: true },
            state: { type: 'string', required: true },
            year: { type: 'number', required: true },
            visited: { type: 'boolean', required: true },
            resided: { type: 'boolean', required: false },
            population: { type: 'number', required: true },
            area: { type: 'number', required: true },
            latitude: { type: 'number', required: true },
            longitude: { type: 'number', required: true },
            rating: { type: 'number', required: true, nullable: true },
        })
    })
})

describe('getFileContents', () => {
    it('should return a string', () => {
        const schemaFile = getFile(mockData)
        expect(typeof schemaFile).toBe('string')
        expect(schemaFile).not.toBeFalsy()
    })
    it('should return schema file contents', () => {
        const schemaFile = getFile(mockData)
        expect(schemaFile).toBe(mockFile)
    })
})
