import { FlatCompat } from '@eslint/eslintrc'
 
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})
 
const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    plugins: ['import'],
  }),
  {
    rules: {
      // Allow apostrophes in JSX text
      'react/no-unescaped-entities': 'off',
      // Allow img tag for external images (YouTube thumbnails)
      '@next/next/no-img-element': 'off',
      // Re-enabled: catch unused variables (prefix with _ to ignore)
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_'
      }],
      // Re-enabled: prevent unsafe any types
      '@typescript-eslint/no-explicit-any': 'warn',
      // Re-enabled: ensure hooks have proper dependencies
      'react-hooks/exhaustive-deps': 'warn',
      // Import rules
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'error',
    },
  },
]
 
export default eslintConfig