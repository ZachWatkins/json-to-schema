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
 * @returns {object} Returns a schema object.
 */
export function get(arrayOfObjects, pluginOptions = {}) {
    console.log(
        arrayOfObjects.length,
        'rows found, getting schema file contents for options:',
        pluginOptions
    )
    return {}
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
    return ''
}

export default get
