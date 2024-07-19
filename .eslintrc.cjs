module.exports = {
  root: true,
  env: {
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:consistent-default-export-name/fixed',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'react',
    'react-native',
    'eslint-plugin-jsdoc',
    '@typescript-eslint',
    'react-hooks',
    'unicorn',
    'import',
    'prettier'
  ],
  settings: {
    ecmaVersion: 'latest',
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'import/no-duplicates': 'error',
    'import/no-self-import': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        peerDependencies: true,
        devDependencies: [
          '**/*.test.[jt]s',
          '**/*.spec.[jt]s',
          '**/*.test.[jt]sx',
          '**/*.spec.[jt]sx',
          'ReactotronConfig.js'
        ]
      }
    ],
    'sort-imports': ['error', {ignoreCase: true, ignoreDeclarationSort: true}],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: '$/**',
            group: 'internal'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        groups: [
          ['builtin', 'external'],
          ['internal'],
          ['parent', 'sibling', 'index'],
          'unknown'
        ]
      }
    ],
    'import/no-cycle': [
      'error',
      {
        maxDepth: '∞',
        ignoreExternal: true
      }
    ],
    /* additional rules previously used */
    'react/react-in-jsx-scope': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      {props: 'never', children: 'never'}
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)'
      }
    ],
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react/no-string-refs': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react-native/no-unused-styles': 'error',
    'react/no-children-prop': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unused-state': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/no-access-state-in-setstate': 'error',
    'default-case': 'error',
    eqeqeq: ['warn', 'smart'],
    'guard-for-in': 'error',
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/tag-lines': ['error', 'never'],
    'prefer-const': 'error',
    'no-unused-vars': 'warn',
    'newline-before-return': 'warn',
    'no-unsafe-optional-chaining': 'off',
    'no-extra-boolean-cast': 'off', // redundant double negation
    'no-useless-escape': 'off', // cleans up regexs,
    'no-duplicate-case': 'off', // spots duplicate case statements
    'no-case-declarations': 'off', // prevents hoisting of variables in case statements
    'no-async-promise-executor': 'off', // good suggestion for a code smell
    'no-empty-pattern': 'off', // unexpected empty object
    'no-prototype-builtins': 'off', // this can be dangerous
    'no-constant-condition': ['error', {checkLoops: false}], // this is fine
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': [
      'error',
      {
        allow: [
          'info', // prefer info to log
          'warn',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupEnd',
          'table',
          'dirxml',
          'error',
          'groupCollapsed',
          'Console',
          'profile',
          'profileEnd',
          'timeStamp',
          'context'
        ]
      }
    ],
    'no-eval': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-var': 'error',
    radix: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/']
      }
    ],
    'consistent-default-export-name/default-export-match-filename': 'error',
    'consistent-default-export-name/default-import-match-filename': 'error',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true
        }
      }
    ],
    'eol-last': ['error', 'always']
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      plugins: ['@typescript-eslint/eslint-plugin'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      },
      rules: {
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            enums: true,
            typedefs: true,
            ignoreTypeReferences: true,
            functions: true,
            classes: true,
            variables: true,
            allowNamedExports: true
          }
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        /* rules introduced by the recommened plugins that are to be addressed in future PRs */
        '@typescript-eslint/no-explicit-any': 'off', // todo temporary disabled, should be revised
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off', // this is return types but only on module boundaries vs @typescript-eslint/explicit-function-return-type
        '@typescript-eslint/unbound-method': 'off', // this rule is failing on things I don't get
        '@typescript-eslint/no-unsafe-member-access': 'off', // lodash import causing this
        '@typescript-eslint/no-unsafe-call': 'off', // lodash as well
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/require-await': 'off', // todo temporary disabled, should be revised
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/ban-types': 'off', // this spots using Number instead of number
        '@typescript-eslint/restrict-plus-operands': 'off', // good rule
        '@typescript-eslint/restrict-template-expressions': 'off', // todo temporary disabled, should be revised should be easy to fix
        '@typescript-eslint/prefer-regexp-exec': 'off', // swaps how regex and string.match are used
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error', // removes redundant code
        '@typescript-eslint/await-thenable': 'off', // await functions that aren't promises
        '@typescript-eslint/no-inferrable-types': 'off', // don't added types for easy to define things
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/member-ordering': 'error',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/no-unsafe-enum-comparison': 'off', // todo temporary disabled, should be revised
        '@typescript-eslint/no-redundant-type-constituents': 'off', // todo temporary disabled, should be revised
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': 'allow-with-description'
          }
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            types: ['boolean'],
            format: ['PascalCase'],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will', 'was']
          },
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null
          },
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE']
          },
          {selector: 'function', format: ['camelCase']},
          {selector: 'class', format: ['PascalCase']},
          {selector: 'enum', format: ['PascalCase']},
          {selector: 'enumMember', format: ['PascalCase', 'UPPER_CASE']},
          {selector: 'interface', format: ['PascalCase']},
          {selector: 'typeAlias', format: ['PascalCase']},
          {selector: 'parameter', format: ['camelCase']}
        ]
      }
    },
    {
      files: ['./**/*.test.ts'],
      rules: {
        '@typescript-eslint/naming-convention': 'off'
      }
    }
  ]
};
