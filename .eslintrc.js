// TODO: Criar novo projeto com todas as configs de setup do monorepo

module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        node: true
    },
    ignorePatterns: ['dist/*', '*.html', 'jest.config.js'],
    plugins: ['@typescript-eslint'],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        '@typescript-eslint/no-explicit-any': ['off'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'indent': ['error', 4]
    }
};