module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          domain: './src/domain',
          infrastructure: './src/infrastructure',
          application: './src/application',
          presentation: './src/presentation',
        },
      },
    },
  },
};
