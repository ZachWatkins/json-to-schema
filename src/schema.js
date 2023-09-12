/**
 * Schema class to define the data types allowed in a given array of objects.
 * @author Zachary K. Watkins <zwatkins.it@gmail.com>
 * @year 2023
 */
import SchemaPlugin from './schema-plugin'
import FoundTypes from './found-types'

export class Schema {
    #plugin = null
    #properties = []
    constructor(arrayOfObjects, pluginOptions) {
        this.#plugin = new SchemaPlugin(pluginOptions)
        const types = new FoundTypes(arrayOfObjects, this.#plugin)
        this.#properties = [...types.properties]
        if ('function' === typeof this.#plugin.propertySchema) {
            for (const prop in types.byProperty) {
                this[prop] = this.#plugin.propertySchema(this[prop])
            }
        } else {
            for (const prop in types.byProperty) {
                const typeList = Object.keys(types.byProperty[prop])
                const required = typeList.indexOf('undefined') === -1
                const nullable = typeList.indexOf('null') !== -1
                const typeValues = typeList.filter(
                    (type) => type !== 'null' && type !== 'undefined'
                )
                const typeValue =
                    typeValues.length === 1 ? typeValues[0] : typeValues
                this[prop] = nullable
                    ? { type: typeValue, required, nullable: true }
                    : { type: typeValue, required }
            }
        }
    }
    toFile() {
        if (this.#plugin.getFileContents) {
            return this.#plugin.getFileContents(this)
        }
        let output = 'export const schema = {\n'
        for (let i = 0; i < this.#properties.length; i++) {
            const prop = this.#properties[i]
            output += `    "${prop}": ${JSON.stringify(this[prop], null, 4)}`
            if (i < this.#properties.length - 1) {
                output += ','
            }
            output += '\n'
        }
        output += '};\n\n'
        output += 'export default { schema }\n'
        return output
    }
}

export default Schema
