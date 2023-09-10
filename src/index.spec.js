import { get, getFile } from './index.js'

describe('get', () => {
    it('should return an object', () => {
        const schema = get(mockData())
        expect(typeof schema).toBe('object')
        expect(schema == null).toBe(false)
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
