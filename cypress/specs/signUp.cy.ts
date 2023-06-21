import { HomePage } from '../page-objects/homePage';
import { SignUpPage} from "../page-objects/signUpPage";

const homePage = new HomePage()
const signUpPage = new SignUpPage()

    it('Sign up positive case', function () {
        cy.visit('/');
        homePage.goToSignUpFlow()
        signUpPage.signUp()
        signUpPage.verifyThatSignedUp()
    })

export {};