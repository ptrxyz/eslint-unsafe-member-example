module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    plugins: ['svelte3', '@typescript-eslint'],
    ignorePatterns: ['*.cjs', 'svelte.config.js'],
    overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
    settings: {
        'svelte3/typescript': () => require('typescript'),
    },
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
