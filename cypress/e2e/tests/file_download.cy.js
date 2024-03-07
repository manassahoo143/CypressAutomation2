const { describe } = require("mocha");

import FD from "../pages/filedownload.cy";
const ssDownload = new FD();

describe("To verify the test cases of download page", ()=> {

    it("To verify user is able to download file", ()=>{

        cy.visit("https://the-internet.herokuapp.com/download");
        cy.wait(3000);
        ssDownload.ScreenShot.click();
    })

    it("To verify the downloadable link should be present", ()=> {

        cy.visit("https://the-internet.herokuapp.com/download");
        ssDownload.shouldExist.should('exist');
    })
})