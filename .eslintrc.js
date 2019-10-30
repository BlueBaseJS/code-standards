module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:react/recommended",
		"plugin:prettier/recommended",
		"plugin:import/errors",
		"plugin:import/warnings"
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: [
		"react",
		"@typescript-eslint",
		"no-null",
		"prettier",
		"prefer-arrow",
		"eslint-plugin-import-order-alphabetical",
		"import"
	],
	rules: {
		"@typescript-eslint/consistent-type-definitions": 0,
		"@typescript-eslint/explicit-member-accessibility": 0,
		"@typescript-eslint/interface-name-prefix": [2],
		"@typescript-eslint/member-ordering": [2],
		"@typescript-eslint/no-empty-interface": 0,
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/no-inferrable-types": [2],
		"@typescript-eslint/no-require-imports": 0,
		"@typescript-eslint/no-this-alias": [2],
		"@typescript-eslint/prefer-function-type": 0,
		"@typescript-eslint/semi": [2],
		"@typescript-eslint/typedef": [2],
		"arrow-body-style": 0,
		"arrow-parens": 0,
		"arrow-spacing": [2],
		camelcase: [2],
		"capitalized-comments": 0,
		eqeqeq: [2],
		"import-order-alphabetical/order": 0,
		"import/no-extraneous-dependencies": [
			0,
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false
			}
		],
		"import/no-internal-modules": 0,
		"import/no-unresolved": [0],
		indent: [
			2,
			"tab",
			{
				SwitchCase: 1
			}
		],
		"max-len": [2, 120],
		"newline-before-return": 0,
		"no-duplicate-imports": 1,
		"no-fallthrough": 2,
		"no-invalid-this": [2],
		"no-null/no-null": 0,
		"no-redeclare": [2],
		"no-restricted-imports": 2,
		"no-shadow": 0,
		"no-trailing-spaces": 2,
		"no-undef": "error",
		"no-unneeded-ternary": 2,
		"no-unused-expressions": 2,
		"no-unused-vars": [0],
		"object-curly-spacing": [2, "always"],
		"object-shorthand": [0],
		"one-var": [0],
		"prefer-arrow/prefer-arrow-functions": [
			2,
			{
				classPropertiesAllowed: false,
				disallowPrototype: true,
				singleReturnOnly: false
			}
		],
		"prefer-template": 2,
		"prettier/prettier": 0,
		quotes: [0],
		"react/jsx-boolean-value": 0,
		"react/jsx-curly-spacing": [2],
		"react/jsx-equals-spacing": [2],
		"react/jsx-key": 2,
		"react/jsx-no-bind": 2,
		"react/jsx-wrap-multilines": 2,
		"react/no-string-refs": 2,
		"react/self-closing-comp": 2,
		"sort-imports": [2],
		"sort-keys": 2,
		"spaced-comment": 2,
		"valid-jsdoc": [2]
	}
};
