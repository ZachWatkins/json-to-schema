/**
 * Mock file output data for testing.
 * @author Zachary K. Watkins <zwatkins.it@gmail.com>
 * @year 2023
 */
export const mockFile = `const schema = {
    "id": {
        "type": "number",
        "required": true
    },
    "city": {
        "type": "string",
        "required": true
    },
    "state": {
        "type": "string",
        "required": true
    },
    "year": {
        "type": "number",
        "required": true
    },
    "visited": {
        "type": "boolean",
        "required": true
    },
    "resided": {
        "type": "boolean",
        "required": false
    },
    "population": {
        "type": "number",
        "required": true
    },
    "area": {
        "type": "number",
        "required": true
    },
    "latitude": {
        "type": "number",
        "required": true
    },
    "longitude": {
        "type": "number",
        "required": true
    },
    "rating": {
        "type": "number",
        "required": true,
        "nullable": true
    }
};
`

export default { mockFile }
