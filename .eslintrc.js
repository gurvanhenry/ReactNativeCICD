module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true, // ignore it to avoid bug with "import/order" rule
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          { pattern: 'react', group: 'external', position: 'before' },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
  },
};
