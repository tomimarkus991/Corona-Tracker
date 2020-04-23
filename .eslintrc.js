module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"prettier/react",
		"plugin:prettier/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	settings: {
		react: {
			pragma: "React",
			version: "16.13.1",
		},
	},
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				tabWidth: 2,
				semi: true,
				singleQuote: true,
				trailingComma: 'all',
				jsxBracketSameLine: true,
				arrowParens: 'always',
				typeof: false,
				endOfLine: 'auto'
			},
		],
		// add some custom ESLint rules
	},
};
