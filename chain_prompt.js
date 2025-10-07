function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim, collapse multiple spaces, and normalize delimiters
    let str = input.trim().replace(/[\s_]+/g, ' ');

    // Remove punctuation except for spaces and hyphens
    str = str.replace(/[^\w\s-]/g, '');

    // Replace spaces and underscores with hyphens
    str = str.replace(/[\s_]+/g, '-');

    // Convert camelCase or PascalCase to kebab-case
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2');

    // Convert to lowercase
    str = str.toLowerCase();

    // Remove multiple hyphens
    str = str.replace(/-+/g, '-');

    // Remove leading/trailing hyphens
    str = str.replace(/^-+|-+$/g, '');

    return str;
}