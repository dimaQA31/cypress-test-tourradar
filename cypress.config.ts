import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 900,
  viewportWidth: 1440,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  video: false,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
      return config
    },
    specPattern: 'cypress/specs/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://www.tourradar.com/d/europe',
    supportFile: false
  },
})
