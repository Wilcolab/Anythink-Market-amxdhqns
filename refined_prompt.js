/**
 * Converts a string to camelCase.
 * 
 * Example:
 *   toCamelCase('hello world') // returns 'helloWorld'
 *
 * @param {string} text - The input string to convert.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a non-null string.
 */
function toCamelCase(text) {
    if (typeof text !== 'string' || text === null) {
        throw new TypeError('Input must be a non-null string');
    }
    // Remove leading/trailing spaces, replace delimiters with space, and split
    const words = text
        .trim()
        .replace(/[_\-]+/g, ' ')
        .replace(/[^a-zA-Z0-9 ]+/g, '')
        .split(/\s+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    return words
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}
function toPascalCase(text) {
    return text
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .trim()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
}

function toDotCase(text) {
    if (typeof text !== 'string' || text === null) {
        throw new TypeError('Input must be a non-null string');
    }
    return text
        .trim()
        .replace(/[_\-]+/g, ' ')
        .replace(/[^a-zA-Z0-9 ]+/g, '')
        .split(/\s+/)
        .filter(Boolean)
        .map(word => word.toLowerCase())
        .join('.');
}

module.exports = { toPascalCase, toDotCase };
