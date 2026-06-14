import next from 'eslint-config-next/core-web-vitals'
import nextTypescript from 'eslint-config-next/typescript'

// Next.js 16 ships native ESLint flat configs (`next lint` was removed, and the
// old FlatCompat shim trips an ESLint 9 circular-ref bug), so we consume them
// directly. These register the @next/next, @typescript-eslint, import, jsx-a11y,
// react and react-hooks plugins, so the overrides below are rules-only.
const eslintConfig = [
  {
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'next-env.d.ts',
      // Infra files with their own (non-Next) runtimes/conventions:
      'cloudflare/**', // Cloudflare Worker (export default { fetch }, worker args)
      'jest.config.js',
      'jest.setup.js',
    ],
  },
  ...next,
  ...nextTypescript,
  {
    rules: {
      // Allow apostrophes in JSX text
      'react/no-unescaped-entities': 'off',
      // Allow img tag for external images (YouTube thumbnails)
      '@next/next/no-img-element': 'off',
      // Catch unused variables (prefix with _ to ignore)
      '@typescript-eslint/no-unused-vars': ['warn', {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      // Prevent unsafe any types
      '@typescript-eslint/no-explicit-any': 'warn',
      // Ensure hooks have proper dependencies
      'react-hooks/exhaustive-deps': 'warn',
      // React 19's react-hooks v6 ships compiler-readiness rules that flag some
      // valid idioms (e.g. resetting UI state on route change). Surface as a
      // warning rather than a hard error.
      'react-hooks/set-state-in-effect': 'warn',
      // Import hygiene
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
  {
    // Test files: jest mocks legitimately return inline components.
    files: ['**/__tests__/**', '**/*.test.{ts,tsx}'],
    rules: {
      'react/display-name': 'off',
    },
  },
]

export default eslintConfig
