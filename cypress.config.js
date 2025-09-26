const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: [
      "cypress/e2e/**/*.feature", // arquivos cucumber
      "cypress/e2e/**/*.cy.js"    // arquivos tradicionais
    ],
    supportFile: "cypress/support/e2e.js",

    async setupNodeEvents(on, config) {
      // Configura o Cucumber
      await addCucumberPreprocessorPlugin(on, config)

      // Configura o bundler (esbuild)
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      )

      return config
    },
  },
})




