import { get, getFile } from './index.js'

describe('get', () => {
    it('should return an object', () => {
        const schema = get(mockData())
        expect(typeof schema).toBe('object')
        expect(schema == null).toBe(false)
    })
    it('should return a schema object', () => {
        const schema = get(mockData())
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
            rating: { type: 'number', required: true, allowNull: true },
        })
    })
})

describe('getFileContents', () => {
    it('should return a string', () => {
        const schemaFile = getFile(mockData())
        expect(typeof schemaFile).toBe('string')
        expect(schemaFile).not.toBeFalsy()
    })
})

function mockData() {
    return [
        {
            id: 1,
            city: 'College Station',
            state: 'TX',
            year: 2023,
            visited: true,
            resided: true,
            population: 122807,
            area: 49.6,
            latitude: 30.628,
            longitude: -96.334,
            rating: 1.0,
        },
        {
            id: 2,
            city: 'Austin',
            state: 'TX',
            year: 2023,
            visited: true,
            population: 978908,
            area: 322.48,
            latitude: 30.267,
            longitude: -97.743,
            rating: null,
        },
    ]
}
