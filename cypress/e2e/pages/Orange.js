class LoginMethod{

    setUserName(username){

        cy.get("input[placeholder='Username']").type(username);
    }

    setPassword(pass){

        cy.get("input[placeholder='Password']").type(pass);
    }

    submit(){
        cy.get("button[type='submit']").click();
    }
}

export default LoginMethod;