module.exports = {
	extends: [
		"tslint:latest",
		"tslint-config-prettier",
		"tslint-react",
		"tslint-eslint-rules"
	],
	rules: {
		"arrow-parens": false,
		"arrow-return-shorthand": [false],
		"comment-format": [true, "check-space"],
		"import-blacklist": [true, "rxjs"],
		"interface-name": [true, "never-prefix"],
		"interface-over-type-literal": false,
		"jsx-boolean-value": false,
		"jsx-no-multiline-js": false,
		"max-line-length": [true, 120],
		"member-access": false,
		"member-ordering": [
			true,
			{
				order: "fields-first"
			}
		],
		"newline-before-return": false,
		"no-any": false,
		"no-empty-interface": false,
		"no-expression-statement": false,
		"no-implicit-dependencies": false,
		"no-inferrable-types": [true, "ignore-params", "ignore-properties"],
		"no-invalid-this": [true, "check-function-in-method"],
		"no-null-keyword": false,
		"no-require-imports": false,
		"no-submodule-imports": false,
		"no-switch-case-fall-through": true,
		"no-this-assignment": [
			true,
			{
				"allow-destructuring": true
			}
		],
		"no-trailing-whitespace": true,
		"object-curly-spacing": [true, "always"],
		"object-literal-shorthand": false,
		"object-literal-sort-keys": true,
		"one-variable-per-declaration": [false],
		"only-arrow-functions": [true, "allow-declarations"],
		"ordered-imports": [false],
		"prefer-method-signature": false,
		"prefer-template": [true, "allow-single-concat"],
		quotemark: [true, "single", "jsx-double"],
		semicolon: [true, "ignore-interfaces"],
		"sort-imports": [true],
		"ter-arrow-spacing": [true],
		"ter-indent": [
			true,
			"tab",
			{
				SwitchCase: 1
			}
		],
		"triple-equals": [true, "allow-null-check"],
		typedef: [true, "parameter", "property-declaration"],
		"variable-name": [
			true,
			"ban-keywords",
			"check-format",
			"allow-pascal-case",
			"allow-leading-underscore"
		],
		whitespace: [true]
	}
};
