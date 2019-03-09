module.exports = {
  "extends": ["tslint:latest", "tslint-config-prettier", "tslint-react", "tslint-eslint-rules"],
  "rules": {
    "arrow-parens": false,
    "arrow-return-shorthand": [false],
    "comment-format": [true, "check-space"],
    "import-blacklist": [true, "rxjs"],
    "interface-over-type-literal": false,
    "max-line-length": [true, 120],
    "member-access": false,
    "member-ordering": [true, {
      "order": "fields-first"
    }],
    "newline-before-return": false,
    "no-any": false,
    "no-empty-interface": false,
    "no-inferrable-types": [true, "ignore-params", "ignore-properties"],
    "no-invalid-this": [true, "check-function-in-method"],
    "no-null-keyword": false,
    "no-require-imports": false,
    "no-switch-case-fall-through": true,
    "no-trailing-whitespace": true,
    "no-this-assignment": [true, {
      "allow-destructuring": true
    }],
    "object-literal-sort-keys": false,
    "object-literal-shorthand": false,
    "one-variable-per-declaration": [false],
    "only-arrow-functions": [true, "allow-declarations"],
    "ordered-imports": [false],
    "prefer-method-signature": false,
    "prefer-template": [true, "allow-single-concat"],
    "semicolon": [true, "ignore-interfaces"],
    "quotemark": [true, "single", "jsx-double"],
    "triple-equals": [true, "allow-null-check"],
    "typedef": [true,"parameter", "property-declaration"],
    "variable-name": [true, "ban-keywords", "check-format", "allow-pascal-case", "allow-leading-underscore"],
    "object-curly-spacing": [
			true,
			"always"
    ],
    "jsx-no-multiline-js": false,
    "interface-name": [true, "never-prefix"],
    "sort-imports": [true],
    "ter-arrow-spacing": [true],
    "whitespace": [true],
    "ter-indent": [
			true,
			"tab",
			{
				"SwitchCase": 1
			}
		],
    "no-expression-statement": false,
		"object-literal-sort-keys": true,
    "no-implicit-dependencies": false,
    "jsx-boolean-value": false,
    "no-submodule-imports": false
  }
}