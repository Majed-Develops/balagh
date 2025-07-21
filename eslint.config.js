import js from '@eslint/js'
import globals from 'globals'
import sveltePlugin from 'eslint-plugin-svelte'

export default [
  js.configs.recommended,
  ...sveltePlugin.configs['flat/recommended'],
  {
    ignores: ['dist/', '.svelte-kit/', 'build/']
  },
  {
    files: ['**/*.{js,ts,svelte}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
    },
  },
]
