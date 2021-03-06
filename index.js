module.exports = {
  globals: {
    $: true,
    _: true,
    window: true,
    document: true,
    FormData: true,
    navigator: true,
    process: true,
    __dirname: true
  },
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ["eslint:recommended", "prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      generators: true
    }
  },
  plugins: ["import", "babel", "react", "html", "prettier"],
  settings: {
    "react": {
      "version": "999.999.999"
    },
    "import/ignore": [
      "node_modules",
      "\\.(json|css|less|scss|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$",
      "\\.eslintrc"
    ],
    "import/extensions": [".js", ".jsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".json"]
      }
    }
  },
  rules: {
    "accessor-pairs": 2,
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "computed-property-spacing": 2,
    "default-case": 2,
    "dot-location": [2, "property"],
    eqeqeq: [2, "smart"],
    "func-style": [
      2,
      "declaration",
      {
        allowArrowFunctions: true
      }
    ],
    indent: [
      2,
      4,
      {
        SwitchCase: 1
      }
    ],
    "max-depth": 2,
    "max-params": [2, 4],
    "new-parens": 2,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-confusing-arrow": 2,
    "no-console": 0,
    "no-div-regex": 2,
    "no-duplicate-imports": 2,
    "no-else-return": 2,
    "no-empty-label": 0,
    "no-empty": 0,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-parens": 0,
    "no-floating-decimal": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 2,
    "no-iterator": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-mixed-requires": 2,
    "no-nested-ternary": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-new": 2,
    "no-octal-escape": 2,
    "no-path-concat": 2,
    "no-proto": 2,
    "no-restricted-modules": 2,
    "no-return-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow-restricted-names": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef-init": 2,
    "no-unneeded-ternary": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [
      1,
      {
        vars: "all",
        args: "after-used"
      }
    ],
    "no-use-before-define": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-void": 2,
    "object-shorthand": 2,
    "operator-assignment": 2,
    "operator-linebreak": 0,
    "prefer-const": 2,
    "prefer-spread": 2,
    radix: 2,
    semi: ["error", "never"],
    "wrap-regex": 2,

    "arrow-parens": [2, "as-needed"],
    "generator-star-spacing": [2, "before"],

    "react/forbid-component-props": 0,
    "react/forbid-prop-types": 0,
    "react/no-danger": 0,
    "react/no-danger-with-children": 0,
    "react/no-deprecated": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 0,
    "react/no-direct-mutation-state": 1,
    "react/no-find-dom-node": 0,
    "react/no-is-mounted": 1,
    "react/no-multi-comp": 1,
    "react/no-render-return-value": 1,
    "react/no-set-state": 0,
    "react/no-string-refs": 1,
    "react/no-unknown-property": 0,
    "react/prefer-es6-class": 1,
    "react/prefer-stateless-function": 1,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "react/require-optimization": [
      1,
      {
        allowDecorators: ["immutableRenderDecorator"]
      }
    ],
    "react/require-render-return": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/sort-prop-types": 1,

    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 1,
    "react/jsx-equals-spacing": [1, "never"],
    "react/jsx-filename-extension": 1,
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-handler-names": [
      1,
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on"
      }
    ],
    "react/jsx-indent": 1,
    "react/jsx-indent-props": 1,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": [0, { maximum: 4 }],
    "react/jsx-no-bind": [
      0,
      {
        ignoreRefs: true,
        allowBind: true
      }
    ],
    "react/jsx-no-comment-textnodes": 0,
    "react/jsx-no-duplicate-props": [
      1,
      {
        ignoreCase: true
      }
    ],
    "react/jsx-no-literals": 0,
    "react/jsx-no-target-blank": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-pascal-case": [
      1,
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    "react/jsx-sort-props": 0,
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/jsx-wrap-multilines": 0,
    "prettier/prettier": "error"
  }
};
