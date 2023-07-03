module.exports = {
    root: true,
    ignorePatterns: ['tailwind.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        requireConfigFile: false,
    },
    globals: {
        SharedArrayBuffer: 'readonly'
    },
    plugins: ['@typescript-eslint', 'react'],
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true
    },
    rules: {
        'import/named': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    extends: ['eslint:recommended'],
    settings: {
        react: {
            version: 'detect'
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            },
            typescript: {
                configPath: ['./tsconfig.json']
            },
            vite: {
                configPath: './vite.config.ts'
            },
            postcss: {
                configPath: './postcss.config.js'
            },
            tailwindcss: {
                configPath: './tailwind.config.js'
            }
        }
    }
};
