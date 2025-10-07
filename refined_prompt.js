/**
 * Converts a given string to camelCase format.
 *
 * The function splits the input string by spaces, underscores, or hyphens,
 * removes any empty segments, lowercases the first word, and capitalizes the
 * first letter of each subsequent word. The resulting words are joined without
 * separators to form a camelCase string.
 *
 * @param {string} input - The string to convert to camelCase. Must be a non-null string.
 * @returns {string} The camelCase formatted string. Returns an empty string if input is empty or contains only separators.
 * @throws {Error} Throws an error if the input is not a non-null string.
 *
 * @example
 * toCamelCase('hello world'); // returns 'helloWorld'
 * @example
 * toCamelCase(' my_name-is John '); // returns 'myNameIsJohn'
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function splits the input string by spaces, underscores, or hyphens,
 * removes any empty segments, lowercases all words, and joins them with dots.
 *
 * @param {string} input - The string to convert to dot.case. Must be a non-null string.
 * @returns {string} The dot.case formatted string. Returns an empty string if input is empty or contains only separators.
 * @throws {Error} Throws an error if the input is not a non-null string.
 *
 * @example
 * toDotCase('hello world'); // returns 'hello.world'
 * @example
 * toDotCase(' my_name-is John '); // returns 'my.name.is.john'
 */
function toCamelCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Invalid input: input must be a non-null string.');
    }

    // Trim and check for empty string after trimming
    const trimmed = input.trim();
    if (trimmed.length === 0) return '';

    // Split by spaces, underscores, or hyphens, and filter out empty parts
    const words = trimmed
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase the first word, capitalize the rest
    return words
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('hello world')); // 'helloWorld'
// console.log(toCamelCase(' my_name-is John ')); // 'myNameIsJohn'
function toDotCase(input) {
    if (typeof input !== 'string' || input === null || input === undefined) {
        throw new Error('Invalid input: input must be a non-null string.');
    }

    // Trim and check for empty string after trimming
    const trimmed = input.trim();
    if (trimmed.length === 0) return '';

    // Split by spaces, underscores, or hyphens, and filter out empty parts
    const words = trimmed
        .split(/[\s_-]+/)
        .filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase all words and join with dots
    return words.map(word => word.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase('hello world')); // 'hello.world'
// console.log(toDotCase(' my_name-is John ')); // 'my.name.is.john'
