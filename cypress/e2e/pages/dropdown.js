class dropdown{

    dropdown(){

        cy.get("#dropdown").click();
    }

    option(){
        cy.get("option[value='2']").click();
    }
}

export default dropdown;