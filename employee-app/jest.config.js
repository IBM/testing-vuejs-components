//Licensed Materials - Property of IBM
//
//@ Copyright IBM Corp. 2019, 2020 All Rights Reserved
//
//US Government Users Restricted Rights - Use, duplication or disclosure restricted by GSA ADP Schedule Contract with IBM Corp.

module.exports = {
    "collectCoverage": false,
    "collectCoverageFrom": ["**/*.{js,vue}", "!**/node_modules/**"],
    testMatch: [
      "**/__tests__/*.spec.js"
    ],
    "coveragePathIgnorePatterns": [
      "/__tests__/",
      "/__fixtures__/",
      "/__solutions__/",
      "<rootDir>/coverage/",
      "<rootDir>/dist/",
      "<rootDir>/tests/",
      "<rootDir>/node_modules/",
      "<rootDir>/babel.config.js",
      "<rootDir>/jest.config.js",
      "<rootDir>/vue.config.js"
    ],
    "moduleFileExtensions": [
        "js",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
      ],
      "transform": {
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "vue-jest",
        ".*\\.(js)$": "babel-jest"
      }
};

