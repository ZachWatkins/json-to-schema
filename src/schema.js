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
        this.#properties.push(...Object.keys(types))
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
        return `const schema {
    id: {
        type: 'number',
        required: true,
    },
    city: {
        type: 'string',
        required: true
    },
    state: {
        type: 'string',
        required: true
    },
    year: {
        type: 'number',
        required: true
    },
    visited: {
        type: 'boolean',
        required: true
    },
    resided: {
        type: 'boolean',
        required: false
    },
    population: {
        type: 'number',
        required: true
    },
    area: {
        type: 'number',
        required: true
    },
    latitude: {
        type: 'number',
        required: true
    },
    longitude: {
        type: 'number',
        required: true
    },
    rating: {
        type: 'number',
        required: true,
        nullable: true
    }
};
`
    }
}

export default Schema
