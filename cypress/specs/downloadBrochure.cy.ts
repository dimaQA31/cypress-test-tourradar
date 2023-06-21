import { HomePage } from '../page-objects/homePage';
import {BrochureModal} from "../page-objects/brochureModal";

const homePage = new HomePage()
const brochureModal = new BrochureModal()

describe('Download Brochure', () =>{
    beforeEach(()=>{
        cy.visit('/');
        homePage.pressOnBrochureButtonForUpperTour()
    })

    it('Positive case', function () {
        brochureModal.downloadBrochure()
        brochureModal.verifyBrochureIsSent()
    })

    it('Negative case: without entering email ', function () {
        brochureModal.attemptToDownloadBrochure()
        brochureModal.verifyBrowserAlert()
    })

})

export {};