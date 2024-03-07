

export default class FD{

    ScreenShot(){

        let screenshot = cy.get("a[href='download/Image.PNG']");
    }

    shouldExist(){

        let SE = cy.get("a[href='download/TextDoc.txt']");
    }
}