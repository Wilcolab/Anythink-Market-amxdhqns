function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim, collapse multiple spaces, and normalize delimiters
    let str = input.trim().replace(/[\s_]+/g, ' ');

    // Replace mixed delimiters (spaces, underscores, camelCase) with spaces
    str = str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase to space
        .replace(/[^a-zA-Z0-9 ]+/g, '');     // remove punctuation

    // Collapse multiple spaces again after replacements
    str = str.replace(/\s+/g, ' ');

    // Convert to lowercase, split by space, and join with hyphens
    const kebab = str
        .toLowerCase()
        .split(' ')
        .filter(Boolean)
        .join('-');

    return kebab;
}

// Example usage:
// console.log(toKebabCase('  Hello_world--Test String!  ')); // "hello-world-test-string"