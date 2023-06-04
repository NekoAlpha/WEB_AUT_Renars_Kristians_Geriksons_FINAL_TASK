import BasePage from "./base.page";

class RadioButtonsPage extends BasePage {
    static get url() {
      return "/radio-button";
    }

    static get maleButton() {
      return cy.get('[for="maleRadio"]');
  }

    static get successMessage() {
      return cy.get('.text-success');
  }

    static get femaleRadio() {
      return cy.get('#femaleRadio');
  }

    static get otherRadio() {
      return cy.get('#otherRadio');
  }

    static get buttons() {
      return cy.get('.custom-control-lable');
  }
}

export default RadioButtonsPage;