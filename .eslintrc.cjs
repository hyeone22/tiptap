module.exports = {
  root: true,
  ignorePatterns: ['dist', 'build', 'node_modules'],
  overrides: [
    {
      files: ['apps/frontend/**/*.{ts,tsx,js,jsx}'],
      env: {
        browser: true,
        es2021: true
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint', 'react', 'react-hooks'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended'
      ],
      settings: {
        react: {
          version: 'detect'
        }
      }
    },
    {
      files: ['apps/backend/**/*.{ts,js}'],
      env: {
        es2021: true,
        node: true
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
      ]
    }
  ]
};
