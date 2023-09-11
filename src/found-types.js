/**
 * Definition of types found among an array of objects.
 * @author Zachary K. Watkins <zwatkins.it@gmail.com>
 * @year 2023
 */
export class FoundTypes {
    properties = []
    byProperty = {}
    constructor(arrayOfObjects, plugin) {
        this.properties = arrayOfObjects
            .map((row) => Object.keys(row))
            .flat()
            .filter((value, index, self) => self.indexOf(value) === index)
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
}

export default FoundTypes
