import '@cypress/puppeteer/support'
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
