const { describe } = require("mocha");

describe("iFrame", ()=> {

    it("Verify the iFrame", ()=> {

        cy.visit("https://jqueryui.com/checkboxradio/");

        cy.get(".demo-frame").then( el=> {
            cy.wrap(el.contents().find('body')).as('iframe')
            cy.get('@iframe').find("label[for='radio-1'] span[class='ui-checkboxradio-icon ui-corner-all ui-icon ui-icon-background ui-icon-blank']").click();
        })
       
    })
})