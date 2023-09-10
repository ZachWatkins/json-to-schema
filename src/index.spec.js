import { writeFileSync } from './index.js'

const mockData = [
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

describe('writeFileSync', () => {
    it('should write a schema file', () => {
        expect(writeFileSync('test.json', mockData)).toBe(true)
    })
})
