export default {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'react-hooks',
		'unused-imports',
	],
	rules: {
		'unused-imports/no-unused-imports': 'error',
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.tsx'],
			},
		],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'off',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'max-len': [
			'error',
			{
				ignoreComments: true,
				code: 125,
			},
		],
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'no-param-reassign': 'off',
		'no-undef': 'off',
		'react/no-array-index-key': 'off',
		'arrow-body-style': 'off',
		'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
		'react/no-unstable-nested-components': 'warn',
	},
	globals: {
		__IS_DEV__: true,
		__API__: true,
	},
};
