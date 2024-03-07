const { describe } = require("mocha");

describe("Hooks Implementation", ()=> {

    //Befor, BeforeEach, After, AfterEach

    beforeEach(()=>{
        cy.visit("https://www.google.com")
    })



    it("test1", ()=> {
        cy.log("test1");
        cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnK']").click();
    })

    it("test2", ()=> {
        cy.log("test2");
        cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnI']").click();
    })
})