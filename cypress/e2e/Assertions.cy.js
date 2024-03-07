//const { expect } = require("chai");
//const { describe } = require("mocha");



//<reference types="cypress-xpath" />
describe("Assertions", ()=> {

    it("Implicit Assertions", ()=> {
        /*
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        //should and
        
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        //Here instead of capturing URL multiple times, we can fetch once and will use assertions multiple times.
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')
        
        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')

        .and('not.contain','manas')       //Negative assertion

        //Here we can add assertions on any image and selections by using should with key i.e. be.visible and exist
        cy.get('.orangehrm-login-branding > img').should('be.visible') 
        cy.get('.orangehrm-login-branding > img').should('exist')

      //  cy.get('.orangehrm-login-branding > img').should('be.visible')     //We can use this way also
      //  .and('exist')

        cy.xpath("//a").should('have.length','5')    //No of links

        cy.get("input[placeholder='Username']").type("Admin")  //provide a value into the box
        cy.get("input[placeholder='Username']").should('have.value','Admin')   // value check assertions

        */
    })

    it("Explicit Assertions", ()=> {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="xyz";

        cy.get(".oxd-userdropdown-name").then( (x) => {

            let actName=x.text()   //to get the actual name

            //BDD style
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            //TDD style
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)

        }  )
    })

})