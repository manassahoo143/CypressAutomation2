class sauceDemoSelectors{

    username(user){

        cy.get("#user-name").type(user);
    }

    password(pass){

        cy.get("#password").type(pass);
    }

    loginBtn(){
        cy.get("#login-button").click();
    }

    productClick(){
        cy.get("a[id='item_3_title_link'] div[class='inventory_item_name ']").click();

    }

    addToCart(){

        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(4)").click();
    }

    cartIcon(){
        cy.get(".shopping_cart_badge").click();
    }

    checkoutBtn(){
        cy.get("#checkout").click();
    }

    firstName(name){
        cy.get("#first-name").type(name);
    }

    lastName(lname){
        cy.get("#last-name").type(lname);
    }

    contBtn(){
        cy.get("#continue").click();
    }

    finishBtn(){
        cy.get("#finish").click();
    }
}

export default sauceDemoSelectors;