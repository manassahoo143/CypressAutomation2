const { describe } = require("mocha");

import perfLowesSelectors from "./pages/LowesData";

describe("Testing of perf.lowes.com", ()=> {

    it("SignIn", ()=> {

        cy.visit("https://perf.lowes.com", { headers: {"User-Agent": "SOASTA"}});

        const lFinder = new perfLowesSelectors();

                lFinder.clickOnSignInBtn();
                lFinder.hitSignInBtn();
                cy.visit("https://perf.lowes.com/u/login/", { headers: {"User-Agent": "SOASTA"}});
                cy.origin("https://perf.lowes.com/u/login/oauth2/authorize?", { headers: {"User-Agent": "SOASTA", "failOnStatusCode": "false", "Accept-Encoding": "gzip, deflate, br, zstd"}});
                lFinder.email("manas.sahoo@cavisson.com");
                lFinder.password("Manas@139");
                lFinder.finalSignIn();


    })
})