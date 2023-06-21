export class HomePage {

    public selectors = {
        headerNavigation : {
            destinationLink: 'ul[data-cy="common-header--navigation"]>li>a:contains("Destinations")',
            destinationCountry: (country: string) => `li[class*="navigation__dropdown-submenu-item"]>a:contains('${country}')`
        },
        profile: {
            placeholder: '[data-cy="header--profile-placeholder"]',
            signUpButton: 'ul a[data-cy="header--dropdown-signup"]'
        },
        toursList: {
            tourBlock: '[data-cy="serp-tours--list"]>ul>li',
            tourName: '.js-ao-serp-tour__name',
            downloadBrochureButton: '[data-cy="serp-tour--download-brochure"]',
        },
        searchField: 'input[class="header-top-search__input"]',
    };

    pressOnBrochureButtonForUpperTour(){
        cy.get(this.selectors.toursList.tourBlock).first().within(() => {
            cy.get(this.selectors.toursList.downloadBrochureButton).click()
        })
    }

    goToDestinations(country: string){
        cy.get(this.selectors.headerNavigation.destinationLink).click()
        cy.get(this.selectors.headerNavigation.destinationCountry(country)).click()
    }

    verifyThatOnThePage(url: string){
        cy.location('href').should('contain', url.toLowerCase());
        cy.get(`h1:contains(${url})`).should('be.visible')
    }

    goToSignUpFlow(){
        cy.get(this.selectors.profile.placeholder).click()
        cy.get(this.selectors.profile.signUpButton).click()
    }
}