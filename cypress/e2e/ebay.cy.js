describe("Ebay website", ()=> {

    it("Mouse hover action class", ()=> {

        cy.visit("https://www.ebay.com");

        cy.contains("a", "Fashion").realHover('mouse');
        cy.wait(2000)
        cy.get(".vl-flyout-nav__js-link[href='https://www.ebay.com/b/Shoes/bn_7000259122']").click();
        cy.wait(1000)
        cy.url().should('include','Shoes');

        let expAsser = "Shoes";

        cy.get(".b-pageheader__text").then( (x)=> {

            let actAsser = x.text();

            expect(actAsser).to.equal(expAsser);
            assert.equal(actAsser,expAsser);
        })

        cy.get("a").contains("Men's Shoes").click();
        cy.wait(1000)
        cy.url().should('include','Mens-Shoes');
    })
})