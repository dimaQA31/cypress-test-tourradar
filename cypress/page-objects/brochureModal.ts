export class BrochureModal {

    public selectors = {
        downloadBrochureModal: {
            header: '.scout-component__modal-heading',
            emailField: '[data-cy="common-download-brochure--email-input"]',
            downloadBrochureButton: '[data-cy="common-download-brochure--submit"]',
        },
    };

    downloadBrochure(){
        cy.get(this.selectors.downloadBrochureModal.header).should('contain.text', 'Download Brochure')
        cy.get(this.selectors.downloadBrochureModal.emailField).type('example@cypress.io')
        cy.get(this.selectors.downloadBrochureModal.downloadBrochureButton).click()
    }

    attemptToDownloadBrochure(){
        cy.get(this.selectors.downloadBrochureModal.header).should('contain.text', 'Download Brochure')
        cy.get(this.selectors.downloadBrochureModal.downloadBrochureButton).click()
    }

    verifyBrochureIsSent(){
        cy.get(this.selectors.downloadBrochureModal.header).should('contain.text', 'Brochure successfully sent!')
    }

    verifyBrowserAlert(){
        cy.on('window:alert',(error)=>{
            expect(error).to.contains('Please enter a valid email');
        })
    }
}