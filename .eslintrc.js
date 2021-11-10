/* eslint-disable */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'block-spacing': 'error',
        'brace-style': ['error', '1tbs'],
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'function-paren-newline': 'error',
        'func-call-spacing': 'error',
        'generator-star-spacing': ['error', 'after'],
        'id-length': 'off',
        'implicit-arrow-linebreak': 'error',
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'max-depth': ["error", 4],
        'max-len': ['error', {code: 120, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreRegExpLiterals: true, ignoreUrls: true}],
        'max-lines-per-function': ['error', {max: 30, skipBlankLines: true, skipComments: true}],
        'max-params': ["error", 5],
        'new-cap': ['error', {"capIsNew": false}],
        'newline-per-chained-call': ["error", {"ignoreChainWithDepth": 3}],
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-case-declarations': 'error',
        'no-console': 'off',
        'no-const-assign': 'error',
        'no-debugger': 'off',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-eval': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-iterator': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-multiple-empty-lines': 'error',
        'no-nested-ternary': 'off',
        'no-new-func': 'error',
        'no-new-object': 'error',
        'no-param-reassign': 'error',
        'no-plusplus': 'error',
        'no-prototype-builtins': 'error',
        'no-restricted-globals': [
            "error",
            {
                "name": "location",
                "message": "Please ensure you are using the correct variable or use 'window.location' if necessary."
            },
            {
                "name": "numeral",
                "message": "Please import numeral from 'numeral' to use this library"
            },
            {
                "name": "isNaN",
                "message": "Please use `Number.isNaN` instead."
            },
            {
                "name": "isFinite",
                "message": "Please use `Number.isFinite` instead."
            }
        ],
        'no-restricted-properties': [
            'error',
            {
                'object': 'Math',
                'property': 'pow',
                'message': 'Use exponentiation operator `**` when calculating exponentiations.'
            }
        ],
        'no-restricted-syntax': 'error',
        'no-return-await': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'off',
        'no-underscore-dangle': 'error',
        'no-unneeded-ternary': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-escape': 'error',
        'no-var': 'error',
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'never'],
        'object-shorthand': 'error',
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error', 'before', {'overrides': { '=': 'after'}}],
        'padded-blocks': ['error', 'always', {'allowSingleLineBlocks': true}],
        'padding-line-between-statements': ['error', {blankLine: "always", prev: ["const", "let", "var"], next: "*"}, {blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]}],
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'quote-props': ['error', 'as-needed'],
        'quotes': ['error', 'single'],
        'semi-spacing': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never',
                'asyncArrow': 'always'
            }
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'spaced-comment': 'error',
        'template-curly-spacing': 'error',
        
        // Typescript plugin requires turning off the base-eslint versions of some of these rules
        'camelcase': 'off',
        'indent': 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        'semi': 'off',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/member-delimiter-style': ['error', {multiline: {delimiter: 'none'}, singleline: {delimiter: 'comma'}}],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unused-vars': ['error', {vars: "all", args: 'after-used', ignoreRestSiblings: true}],
        '@typescript-eslint/no-use-before-define': ["error", {"functions": false, "classes": false}],
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/semi': ['error', 'always'],
    }
};
