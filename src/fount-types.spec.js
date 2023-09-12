/**
 * Specification for the found-types module.
 * @author Zachary K. Watkins <zwatkins.it@gmail.com>
 * @year 2023
 */

import FoundTypes from './found-types'

describe('FoundTypes', () => {
    it('Sets a list of properties in the order they appear among an arrayof objects with sparse properties.', () => {
        const arrayOfObjects = [
            { a: 1, b: 2, d: 3 },
            { a: 2, b: 3, c: 4, d: 1 },
            { a: 5, c: 6, d: 2 },
        ]
        const foundTypes = new FoundTypes(arrayOfObjects, {
            typeOfValue: (value) => typeof value,
        })
        expect(foundTypes.properties).toEqual(['a', 'b', 'c', 'd'])
    })
})
