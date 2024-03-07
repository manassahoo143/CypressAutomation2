class perfLowesSelectors{

    clickOnSignInBtn(){
        cy.get("#account-name").click();
    }

    hitSignInBtn(){
        cy.get("a[aria-label='Sign In'] span[class='label link-label bold']").click();
    }

    email(emailL){
        cy.get("#email").type(emailL);
    }

    password(pass){
        cy.get("#user-password").type(pass);
    }

    finalSignIn(){
        cy.get("button[aria-label='Submit']").click();
    }
}

export default perfLowesSelectors;