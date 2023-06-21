import { HomePage } from '../page-objects/homePage';

const homePage = new HomePage()

    it('Check "Destinations" header navigation to specific country', function () {
        const country = "Tanzania"
        cy.visit('/');
        homePage.goToDestinations(country)
        homePage.verifyThatOnThePage(country)
    })

export {};