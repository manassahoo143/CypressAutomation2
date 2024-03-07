import kohlsSelectors from "./pages/KohlsClasses";

describe("Testing of Lumada app A Hitachi Energy Company", ()=> {

    it("LUMADA - PERFDEVGA", ()=>{

        cy.visit("https://www.kohls.com");

        cy.fixture('kohlsData').then( (data)=>{

        const finder = new kohlsSelectors();

        finder.clickonSignIn();
        finder.email(data.email);
        finder.contBtn();
        finder.password(data.password);
        finder.signInBtn();

        })
        
        
    })
})