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
}

export default SchemaPlugin
