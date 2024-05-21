import js from "@eslint/js"
import globals from "globals"

export default [
	js.configs.recommended, // https://eslint.org/docs/latest/use/configure/configuration-files#using-predefined-configurations
	{
		ignores:         ["node_modules/**/*", "**/dist/**/*"],
		languageOptions: {
			ecmaVersion:   "latest",
			sourceType:    "module",
			parserOptions: { ecmaFeatures: { impliedStrict: true } },
			globals:       {
				...globals.browser
			}
		},
		rules: {
			"no-multi-spaces": ["error"],
			"no-unused-vars":  "error",
			"prefer-const":    [ "error", { "ignoreReadBeforeAssign": true }],
			"indent":          [ "error", "tab"],
			"linebreak-style": [ "error", "unix" ],
			"quotes":          [ "error", "double" ],
			"semi":            [ "error", "never" ],
			"eqeqeq":          [ "error", "always" ], // enforce the use of strict equality operators
			"strict":          [ "error", "global" ], // enforce the use of strict mode, which is enabled by default in ES6

			// (Optional) Stylistic rules
			"space-infix-ops":     [ "error", { "int32Hint": false } ],
			"space-before-blocks": [ "error",
				{
					"functions": "always",
					"keywords":  "always",
					"classes":   "never"
				}
			],
			"key-spacing": [ "error",
				{
					"beforeColon": false,
					"afterColon":  true,
					"mode":        "minimum",
					"align":       "value"
				}
			],
		},
	}
]
