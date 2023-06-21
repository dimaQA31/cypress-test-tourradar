# Cypress

[Cypress](https://www.cypress.io/) is a next-generation front end testing tool constructed for modern web applications. Most testing tools (like Selenium) operate by running outside of the browser and executing remote commands across the network. But the Cypress engine directly operates inside the browser.

## Installation

- Navigate to folder: `cd cypress`
- Install cypress: `yarn install`

## Running Tests

### Execution commands

- Running all tests headless
```javascript
npm run test
 ```

- Running all tests headed
```javascript
npm run test-headed
 ```

- Generate report

1) ``npm run report-merge``
2) ``npm run report-generate``
3) Go to ``mochawesome-report`` folder and run ``mochawesome.html`` file
4) Delete all the ``mochawesome`` directories and files before re-running tests again 