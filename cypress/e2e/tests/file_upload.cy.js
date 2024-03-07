describe("File upload", ()=> {

    it("Uploaded a file", ()=> {

        cy.visit("https://the-internet.herokuapp.com/upload");

        cy.wait(2000);
        cy.get("#file-upload").selectFile("C:/Users/manas.sahoo/Desktop/CAvvv.png");
        cy.get("#file-submit").click();
    })
})