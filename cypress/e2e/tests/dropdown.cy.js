import dropdown from "../pages/dropdown";


describe("verification of dropdown", ()=> {

    it("dropdown", ()=> {

        const dd = new dropdown();
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        dd.dropdown();                             

    })

    it("select the value", ()=> {

        const dd2 = new dropdown();
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        dd2.dropdown();
        dd2.option();
        
    })
})