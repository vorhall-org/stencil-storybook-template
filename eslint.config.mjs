import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestPlugin from 'eslint-plugin-jest';
import customTsRules from './lint/ts-rules.mjs';
import customEsRules from './lint/es-rules.mjs';

export default tseslint.config(
  {
    ignores: [
      '**/dist/**',
      '**/www/**',
      '**/loader/**',
      '**/.stencil/**',
    ],
  },
  {
    extends: [eslint.configs.recommended],
    rules: customEsRules,
  },
  {
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
    ],
    files: ['**/*.ts?(x)'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 6,
        sourceType: 'module',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      ...customTsRules,
    },
  },
  {
    // disable type-aware linting on JS files
    files: ['**/*.?(m)js'],
    ...tseslint.configs.disableTypeChecked,
  },
  {
    // enable jest rules on test files
    files: [
      '**/*.e2e.ts',
      '**/*.spec.ts',
    ],
    ...jestPlugin.configs['flat/recommended'],
  },
);
