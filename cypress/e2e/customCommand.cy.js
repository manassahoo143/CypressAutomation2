const { describe } = require("mocha");


describe("Url Check", ()=> {

   it("Custom command check", ()=> {

    cy.visit("https://www.yahoo.com/")
    cy.api_checks("https://www.yahoo.com/")
   })
})