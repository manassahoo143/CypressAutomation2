const { describe } = require("mocha");

import sauceDemoSelectors from "../pages/sdSelectors";

describe("Saucedemo website testing", ()=> {

    it("Test cases", ()=> {

        cy.visit("https://www.saucedemo.com/")
        cy.wait(10000)
        cy.getAllLocalStorage().should('not.be.empty')
        cy.clearAllLocalStorage()
        cy.getAllLocalStorage().should('be.empty')

            const find = new sauceDemoSelectors();

            find.username("standard_user");
            find.password("secret_sauce");
            cy.wait(3000);
            find.loginBtn();
            cy.wait(2000);

            cy.url().should('contain','inventory');

            let expValue = "Products";

            cy.get(".title").then( (x)=> {

                let actValue = x.text();

                expect(actValue).to.equal(expValue);
                assert.equal(actValue,expValue);
        })

            find.productClick();
            cy.wait(2000)
            find.addToCart();
            cy.wait(2000)
            find.cartIcon();
            cy.wait(2000)
            find.checkoutBtn();
            cy.wait(2000)
            find.firstName(randomString());
            cy.wait(1000)
            find.lastName(randomString());
            cy.wait(1000)
            cy.get("#postal-code").type("123456");
            cy.wait(2000)
            find.contBtn();
            cy.wait(1000)

            cy.get(".title").should('contain','Checkout: Overview');
            find.finishBtn();
            cy.wait(2000)
    })

    function randomString() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
})