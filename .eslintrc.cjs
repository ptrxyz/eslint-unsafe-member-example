module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:svelte/recommended',
    ],
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['*.cjs', 'svelte.config.js'],
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: {
                    ts: '@typescript-eslint/parser',
                    typescript: '@typescript-eslint/parser',
                },
            },
        },
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        project: ['./tsconfig.json'],
        extraFileExtensions: ['.svelte'],
    },
    env: {
        browser: true,
        es2017: true,
        node: true,
    },
}
