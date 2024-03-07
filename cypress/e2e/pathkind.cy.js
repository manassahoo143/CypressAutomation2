//const { describe } = require("mocha");

describe("Pathkind_Labsoul", ()=> {

    it("Patient_Registration", ()=> {

        cy.visit("https://20.235.114.119/lims_qctestscript")

        cy.get("#mat-input-0").type("CavissonQC1277QC1277")
        cy.get("#mat-input-1").type("Admin@123")

        cy.get("button[type='submit'] span[class='mat-button-wrapper']").click()
    })
})