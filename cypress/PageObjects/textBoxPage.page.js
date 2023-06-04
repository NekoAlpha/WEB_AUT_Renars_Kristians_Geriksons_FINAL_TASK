import BasePage from "./base.page";
import 'cypress-file-upload';

class TextBoxPage extends BasePage{

    static get url() {
        return "/text-box";
    }

    static visit() {
        cy.visit(this.url);
    }

    get firstNameInput() {
        return cy.get("#firstName");
     }
    
    get lastNameInput() {
        return cy.get("#lastName");
     }
    
    get emailInput() {
        return cy.get("#userEmail");
     }

    static get currentAddressField() {
       return cy.get("textarea#currentAddress");
     }

    static get permanentAddressField() {
       return cy.get("textarea#permanentAddress");
     }

    static get submitButton() {
      return cy.get("button#submit");
     }

    static get nameSection() {
      return cy.get("#name");
    }

    static get emailSection() {
      return cy.get("#email");
     }

    static get mobileSection() {
      return cy.get("p#mobile");
    }
    
    static get dateOfBirthSection() {
      return cy.get("p#dateOfBirth");
    }

    static get subjectsSection() {
      return cy.get("p#subjects");
    }

    static get currentAddressSection() {
      return cy.get("p#currentAddress");
     }
     
    static get permanentAddressSection() {
      return cy.get("p#permanentAddress");
    }

    static get uploadPictureInput(){
      return cy.get('#uploadPicture');
    }

    static uploadPicture(filePath){
      this.uploadPictureInput.attachFile(filePath);
    }

}
export default TextBoxPage;