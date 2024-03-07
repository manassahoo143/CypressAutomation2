const { describe } = require("mocha");

describe("Saucedemo website testing", ()=> {

    it("Test cases", ()=> {

        cy.visit("https://www.saucedemo.com/")
        cy.wait(2000)
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.wait(3000)
        cy.get("#login-button").click()
        cy.wait(2000)

        cy.url().should('contain','inventory');

        let expValue = "Products";

        cy.get(".title").then( (x)=> {

            let actValue = x.text();

            expect(actValue).to.equal(expValue);
            assert.equal(actValue,expValue);
            
        
        })

        
    })
})