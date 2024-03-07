class kohlsSelectors{

    clickonSignIn(){

        cy.get("body div[id='container'] div[id='header'] div div[id='persistent_bar_container'] div[class='tr_phase2_headercontainer'] div[id='header-container'] div[id='utility-nav'] ul[class='utility-nav-group'] a:nth-child(1)").click();
    }


    email(emailA){
        cy.get("#input-panel1011").type(emailA);
    }

    contBtn(){
        cy.get("#button-panel1013").click();
        
    }

    password(pass){
        cy.get("#input-panel1015").type(pass);
    }

    signInBtn(){
        cy.get("#button-panel1017").click();
    }
}

export default kohlsSelectors;