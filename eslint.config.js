import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
    {
        files: ['src/**/*.ts'],
        linterOptions: {
            reportUnusedDisableDirectives: 'off',
        },
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'off',
            'no-undef': 'off',
        },
    },
    {
        ignores: ['demo/', 'docs/', 'validation/', 'vue-mc.js', 'vue-mc.es.js', 'node_modules/', 'src/**/*.js', 'src/**/*.d.ts'],
    },
];
