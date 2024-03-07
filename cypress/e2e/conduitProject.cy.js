const { describe } = require("mocha");

describe("Conduit", ()=> {

    it("SignUp", ()=> {
        cy.visit("https://react-redux.realworld.io/");
        cy.get("body > div:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)").click();
        cy.get("input[placeholder='Username']").type(randomUserId());
        cy.get("input[placeholder='Email']").type(randomUserId()+'@gmail.com');
        cy.get("input[placeholder='Password']").type(randomUserId()+'4919945');
        cy.get("button").contains('Sign in').click();
        //cy.wait(3000);
        cy.get("a").contains('Home').should('have.text','Home');    //Assertion
        //cy.wait(3000);

    })

    it("New post and verify", ()=> {
        cy.get("a[href='#editor']").click();
        cy.url().should('contain','editor');
        cy.get("input[placeholder='Article Title']").type("DemoTest@12345#!");
        cy.get("#main > div > div > div > div > div > form > fieldset > fieldset:nth-child(2) > input").type(randomUserId());
        cy.get("#main > div > div > div > div > div > form > fieldset > fieldset:nth-child(3) > textarea").type("CavTestDebugTestCases");
        cy.get("button").contains('Publish Article').click();

    })

    function randomUserId() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for(var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
})