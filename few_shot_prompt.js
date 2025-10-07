/**
 * Converts a string to camelCase.
 * Example: toCamelCase('first name') returns 'firstName'
 * Example: toCamelCase('user_id') returns 'userId'
 * Example: toCamelCase('SCREEN_NAME') returns 'screenName'
 * Example: toCamelCase('mobile-number') returns 'mobileNumber'
 */
function toCamelCase(text) {
    return text
        .replace(/[_\-\s]+/g, ' ')
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
        )
        .replace(/\s+/g, '');
}
function toKebabCase(text) {
    return text
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

module.exports = { toKebabCase };