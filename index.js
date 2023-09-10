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
}

/**
 * Get schema file contents inferred from an array of objects.
 * @param {object[]|[]} arrayOfObjects - Array of objects to evaluate.
 * @param {object} [pluginOptions={}] - Schema plugin options.
 * @param {string} [pluginOptions.schema] - Name of a schema plugin used to interpret the array of objects and produce a schema.
 * @returns {string} Returns a string of schema file contents.
 */
export function getFileContents(arrayOfObjects, pluginOptions = {}) {
    console.log(
        arrayOfObjects.length,
        'rows found, getting schema file contents for options:',
        pluginOptions
    )
    return ''
}

/**
 * Write a schema file inferred from an array of objects.
 * @param {string} filename - Path to write schema file to.
 * @param {object[]|[]} arrayOfObjects - Array of objects to evaluate.
 * @param {object} [pluginOptions={}] - Schema plugin options.
 * @param {string} [pluginOptions.schema] - Name of a schema plugin used to interpret the array of objects and produce a schema.
 * @returns {boolean} Returns true if the schema file was written successfully.
 */
export function writeFileSync(filename, arrayOfObjects, pluginOptions = {}) {
    console.log(
        arrayOfObjects.length,
        'rows found, writing schema file to ',
        filename,
        ' for options:',
        pluginOptions
    )
    return true
}

export default get
