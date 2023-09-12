/**
 * Definition of types found among an array of objects.
 * @author Zachary K. Watkins <zwatkins.it@gmail.com>
 * @year 2023
 */
class FoundTypes {
    properties = []
    byProperty = {}
    constructor(arrayOfObjects, plugin) {
        this.setProperties(arrayOfObjects)
        this.byProperty = arrayOfObjects.reduce((types, row) => {
            for (let i = 0; i < this.properties.length; i++) {
                const prop = this.properties[i]
                if (types[prop] === undefined) {
                    types[prop] = {}
                }
                let schemaType = plugin.typeOfValue(row[prop])
                if (types[prop][schemaType] === undefined) {
                    types[prop][schemaType] = true
                }
            }
            return types
        }, {})
    }
    /**
     * Iterate over each object in the array to create an ordered list of their properties.
     * Assume that sparse properties always occur in the same order among other properties.
     * @param {object[]|[]} arrayOfObjects - Array of objects to evaluate.
     * @returns {void}
     */
    setProperties(arrayOfObjects) {
        if (!arrayOfObjects.length) {
            this.properties = []
        }
        // Assume that the properties are always in the same order, but may be sparse.
        const propertyLength = arrayOfObjects
            .map((row) => Object.keys(row).length)
            .reduce((a, b) => Math.max(a, b))
        const fullRow = arrayOfObjects.find(
            (row) => Object.keys(row).length === propertyLength
        )
        if (fullRow) {
            // At least one row has all of the properties.
            this.properties = Object.keys(fullRow)
        } else {
            // None of the rows have all properties.
            // We'll do our best but it's not going to be perfect.
            const propertyMap = arrayOfObjects.reduce((map, row) => {
                for (let prop in row) {
                    if (map[prop] === undefined) {
                        map[prop] = true
                    }
                }
                return map
            }, {})
            this.properties = Object.keys(propertyMap)
        }
    }
}

export default FoundTypes
