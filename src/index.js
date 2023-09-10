/**
 * JavaScript module to create a schema from an array of (flat) objects.
 * @author Zachary K. Watkins, <watkinza@gmail.com>
 * @year 2023
 */

/**
 * Get a schema object inferred from an array of flat objects.
 * @param {object[]|[]} arrayOfObjects - Array of objects to evaluate.
 * @param {object} [pluginOptions={}] - Schema plugin options.
 * @param {string} [pluginOptions.schema] - Name of a schema plugin used to interpret the array of objects and produce a schema.
 * @returns {Schema} Returns a schema object.
 */
export function get(arrayOfObjects, pluginOptions = {}) {
    console.log(
        arrayOfObjects.length,
        'rows found, getting schema file contents for options:',
        pluginOptions
    )

    function SchemaPlugin(options) {
        this.options = options
        this.typeOfValue = function (value) {
            return typeof value !== 'object' || value !== null
                ? typeof value
                : 'null'
        }
    }

    function Schema(arrayOfObjects, pluginOptions) {
        const types = new FoundTypes(
            arrayOfObjects,
            new SchemaPlugin(pluginOptions)
        )
        for (const prop in types.byProperty) {
            const typeList = Object.keys(types.byProperty[prop])
            const typeValues = typeList.filter(
                (type) => type !== 'null' && type !== 'undefined'
            )
            this[prop] = {
                type: typeValues.length === 1 ? typeValues[0] : typeValues,
                required: typeList.indexOf('undefined') === -1,
            }
            if (typeList.indexOf('null') !== -1) {
                this[prop].nullable = true
            }
        }
    }

    function FoundTypes(arrayOfObjects, plugin) {
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

    return new Schema(arrayOfObjects, pluginOptions)
}

/**
 * Get schema file contents inferred from an array of objects.
 * @param {object[]|[]} arrayOfObjects - Array of objects to evaluate.
 * @param {object} [pluginOptions={}] - Schema plugin options.
 * @param {string} [pluginOptions.schema] - Name of a schema plugin used to interpret the array of objects and produce a schema.
 * @returns {string} Returns a string of schema file contents.
 */
export function getFile(arrayOfObjects, pluginOptions = {}) {
    console.log(
        arrayOfObjects.length,
        'rows found, getting schema file contents for options:',
        pluginOptions
    )
    return 'schema'
}

export default get
