module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  extends: [
    'airbnb', // airbnb-base를 설치한 경우 airbnb-base
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/prettier',
  ],
  rules: {
    'max-len': ['warn', { code: 80 }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': ['warn'],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  settings: {
    'import/resolver': {
      typescript: './tsconfig.json',
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
