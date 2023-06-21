export class SignUpPage {

    public selectors = {
        signUpModal: {
            fullNameField: '[data-cy="sign-up--name"]',
            emailField: '[data-cy="sign-up--email"]',
            passwordField: '[data-cy="sign-up--password"]',
            repeatPasswordField: '[data-cy="sign-up--password-repetition"]',
            submitButton: '[data-cy="sign-up--submit"]'
        },
        signedUpName: (name: string) => `h1[class*="profile-details-greeting"]:contains('${name}')`
    };

    signUp(){
        const rndInt = Math.floor(Math.random() * 100000) + 1000
        cy.fixture('user').then((data)=>{
            cy.get(this.selectors.signUpModal.fullNameField).type(data.name)
            cy.get(this.selectors.signUpModal.emailField).type(`${rndInt}${data.email}`)
            cy.get(this.selectors.signUpModal.passwordField).type(data.password)
            cy.get(this.selectors.signUpModal.repeatPasswordField).type(data.password)
        })
        cy.get(this.selectors.signUpModal.submitButton).click()
    }

    verifyThatSignedUp(){
        cy.fixture('user').then((data)=> {
            cy.get(this.selectors.signedUpName(data.name)).should('be.visible')
        })
    }
}