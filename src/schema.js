/**
 * Schema class to define the data types allowed in a given array of objects.
 * @author Zachary K. Watkins <zwatkins.it@gmail.com>
 * @year 2023
 */
import SchemaPlugin from './schema-plugin'
import FoundTypes from './found-types'

export class Schema {
    constructor(arrayOfObjects, pluginOptions) {
        const plugin = new SchemaPlugin(pluginOptions)
        const types = new FoundTypes(arrayOfObjects, plugin)
        if ('function' === typeof plugin.propertySchema) {
            for (const prop in types.byProperty) {
                this[prop] = plugin.propertySchema(this[prop])
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
}

export default Schema