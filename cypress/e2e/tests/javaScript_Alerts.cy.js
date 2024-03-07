//const { expect } = require("chai");

describe("javascript alerts mechanism test", ()=> {

    it("JS Alert", ()=> {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get("button[onclick='jsAlert()']").click();
    })

    it("JS confirm alert", ()=> {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm", (w)=> {
            expect(w).to.equal("I am a JS Confirm");
        })
    })
})