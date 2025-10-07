function toCamelCase(input) {
    if (typeof input !== 'string' || input == null) {
        throw new TypeError('Input must be a non-null string');
    }

    // Remove punctuation except word separators, trim, and split by separators
    const words = input
        .trim()
        .replace(/[^\w\s\-]/g, '') // Remove punctuation except _ and -
        .split(/[\s_\-]+/);

    if (words.length === 0) return '';

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
// console.log(toCamelCase('hello_world-example text')); // 'helloWorldExampleText'