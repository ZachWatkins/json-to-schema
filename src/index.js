/**
 * JavaScript module to create a schema from an array of (flat) objects.
 * @author Zachary K. Watkins, <watkinza@gmail.com>
 * @year 2023
 */

import Schema from './schema'

/**
 * Get a schema object inferred from an array of flat objects.
 * @param {object[]|[]} arrayOfObjects - Array of objects to evaluate.
 * @param {object} [pluginOptions={}] - Schema plugin options.
 * @param {string} [pluginOptions.schema] - Name of a schema plugin used to interpret the array of objects and produce a schema.
 * @returns {Schema} Returns a schema object.
 */
export function get(arrayOfObjects, pluginOptions = {}) {
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
    const schema = new Schema(arrayOfObjects, pluginOptions)
    return schema.toFile()
}

export default get
