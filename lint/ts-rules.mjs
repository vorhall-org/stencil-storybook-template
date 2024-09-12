export default {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': 'error',
  '@typescript-eslint/explicit-function-return-type': 'warn',
  '@typescript-eslint/explicit-member-accessibility': 'error',
  '@typescript-eslint/naming-convention': [
    'error',
    {
      custom: {
        match: true,
        regex: '^I[a-z]',
      },
      format: ['PascalCase'],
      selector: 'interface',
    },
    {
      format: ['camelCase'],
      selector: 'default',
    },
    {
      format: [
        'camelCase',
        'UPPER_CASE',
      ],
      selector: 'variable',
    },
    {
      format: ['camelCase'],
      leadingUnderscore: 'allow',
      selector: 'parameter',
    },
    {
      format: ['camelCase'],
      leadingUnderscore: 'require',
      modifiers: ['private'],
      selector: 'memberLike',
    },
    {
      format: ['PascalCase'],
      selector: 'typeLike',
    },
  ],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-empty-interface': 'error',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-inferrable-types': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      varsIgnorePattern: '^h$',
    },
  ],
  '@typescript-eslint/no-use-before-define': 'error',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/parameter-properties': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  'camelcase': 'off',
  'indent': [
    'error',
    2,
    {
      SwitchCase: 1,
    },
  ],
};
