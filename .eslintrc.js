module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'id-length': [
            'error', {
                'min': 2
            }            
        ],
        'camelcase': 2,
        'keyword-spacing': 2,
        'space-infix-ops': 2,
        'comma-spacing': 2,
        'space-before-blocks': 2,
        'spaced-comment': 2,
        'key-spacing': 2,
        'no-multi-spaces': 2,
        'space-in-parens': [
            'error',
            'never'
        ],
        'space-before-function-paren': [
            'error',
            'never'
        ],
        'func-call-spacing': [
            'error',
            'never'
        ],
        'no-multiple-empty-lines': [
            'error', {
                'max': 1
            }
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'no-floating-decimal': 2,
        'object-property-newline': 2,
        'brace-style': 2,
        'eqeqeq': [
            'error',
            'always'
        ],
        'no-array-constructor': 2,
        'no-console': 'off',
    }
};