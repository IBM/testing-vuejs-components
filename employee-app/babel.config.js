module.exports = {
  presets: [
    '@babel/preset-env',
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    "test": {
      "plugins": [
        "babel-plugin-dynamic-import-node", "@babel/plugin-transform-runtime"
      ]
    }
  }
}
