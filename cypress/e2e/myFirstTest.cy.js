//<reference types="cypress-xpath" />
import LoginMethod from "./pages/Orange"

describe('firstTestCase', () => {

  it('letsStart', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/')

    cy.get("input[placeholder='Username']").type("Admin")

    cy.get("input[placeholder='Password']").type("admin123")

    cy.get("button[type='submit']").click()

   // cy.xpath("//button[normalize-space()='Login']").click()

  })

  it.only('letsStart', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.fixture('orangehrm').then(  (data)=> {

      const finder = new LoginMethod();

    finder.setUserName(data.username);
    finder.setPassword(data.password);
    finder.submit();

    })
    

    

  })

})