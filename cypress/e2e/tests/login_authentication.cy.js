const { describe } = require("mocha");

describe("To check Login of user", ()=> {

    it("Login", ()=> {

        cy.visit("https://the-internet.herokuapp.com/login");

        cy.wait(3000);
        cy.get("#username").type("tomsmith");
        cy.get("#password").type("SuperSecretPassword!");
        cy.get(".fa.fa-2x.fa-sign-in").click();
    })
})