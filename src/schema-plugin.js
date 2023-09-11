/**
 * Default schema plugin used to translate JavaScript data values to a target schema library or language.
 * @author Zachary K. Watkins <zwatkins.it@gmail.com>
 * @year 2023
 */
export class SchemaPlugin {
    #options = {}
    constructor(options = {}) {
        this.#options = options
    }
    typeOfValue(value) {
        return typeof value !== 'object' || value !== null
            ? typeof value
            : 'null'
    }
    /**
     * Create the contents of a schema file from an object with cell column headers for keys and {[propType]: true} collections for values.
     * @param {{[column: string]: {[propType: string]: boolean}}} types - Object with cell column headers for keys and {[propType]: true} collections for values.
     * @param {object} options - File options.
     * @returns {string} Schema file contents for an array of objects which conforms to the adapter's schema language.
     */
    getFileContents(types, options = {}) {
        const { name = 'schema', withImport, withExport } = options
        const lines = []

        if (withImport) {
            lines.push(this.fileHeader())
        }

        lines.push(`const ${name} = {`)

        for (const prop in types) {
            // Sorts types so null and optional are at the end of the array, and optional is at the very end of the array when present.
            let propTypes = Object.keys(types[prop]).sort((a, b) =>
                'optional' === a
                    ? 1
                    : 'optional' === b
                    ? -1
                    : 'null' === a
                    ? 1
                    : 'null' === b
                    ? -1
                    : 0
            )
            let propKey = prop.indexOf(' ') > -1 ? `"${prop}"` : prop
            lines.push(
                `    ${propKey}: [` +
                    propTypes
                        .reduce((acc, type) => {
                            acc.push(this.columnSchema(type))
                            return acc
                        }, [])
                        .join(', ') +
                    '],\n'
            )
        }

        lines.push('};')

        if (withExport) {
            lines.push(`export default ${name}`)
        }

        return lines.join('\n') + '\n'
    }
}

export default SchemaPlugin
