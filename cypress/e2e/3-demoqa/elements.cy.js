import TextBoxPage from "../../PageObjects/textBoxPage.page";
import CheckboxPage from "../../PageObjects/checkbox.page";
import RadioButtonsPage from "../../PageObjects/radioButtons.page";


describe("Elements", () => {
  context("Text Box scenarios", () => {
    beforeEach(() => {
      cy.visit("https://demoqa.com/automation-practice-form");
    });

  

    it("Text Box Positive", () => {
     // Intercations with elements
     cy.get("#firstName").type("Renārs Kristiāns");
     cy.get("#lastName").type("Geriksons");
     cy.get("#userEmail").type("s22gerirena@venta.lv");
     cy.get("[for='gender-radio-1']").click();
     cy.get("#userNumber").type("27489017");
     cy.get("#dateOfBirthInput").click();
     cy.get(".react-datepicker__month-select").select("February");
     cy.get(".react-datepicker__year-select").select("1930");
     cy.get(".react-datepicker__day--028").click();
     cy.get("#subjects").type("Economics");
    //  cy.get(".subjects-auto-complete__menu-list").contains("Economics").click();
     cy.get("[for='hobbies-checkbox-3']").click();
    // Augšupielādējiet attēlu
      cy.fixture("images/Cute_Kitty_image.jpg").then((fileContent) => {
        cy.get("#uploadPicture").upload({
          fileContent,
          fileName: "Cute_Kitty_image.jpg",
          mimeType: "image/jpeg",
        });
      });

     cy.get("#state").click().type("NCR{enter}");
     cy.get("#city").click().type("Delhi{enter}");
     cy.get("#submit").click();
      //validation
     TextBoxPage.nameSection.should("have.text", "Renārs Kristiāns");
     TextBoxPage.emailSection.should("have.text", "jusu.epasts@example.com");
     TextBoxPage.mobileSection.should("have.text", "1234567890");
     TextBoxPage.dateOfBirthSection.should("have.text", "28 February,1930");
     TextBoxPage.subjectsSection.should("have.text", "Economics");

    it("Text Box Negative", () => {
        TextBoxPage.emailField.should("not.have.class", "field-error");
        TextBoxPage.emailField.type("rand2424@om@email.com");
        TextBoxPage.submitButton.click();
        TextBoxPage.emailField.should("have.class", "field-error");
      });

      // Checkbox scenarios
     //CheckboxPage.hobbiesSection.should("have.check", "Music");
     
     it('Checkbox select items', () => { 
      // Click Expand (+) icon/button
      CheckboxPage.expandButton.click();
      // Click notes, Angular, Private, Excel file.doc
      //CheckboxPage.checkboxTitles.contains("Music").click();
      // Validate that selected items are registered
      CheckboxPage.result.should("have.text", "You have selected :musicFile");
    })
     
     // Radio button
  context("Radio Button scenarios", () => {
    beforeEach(() => {
      // TODO: Create RadioButtonsPage
      RadioButtonsPage.visit();
    });

    it.only("Click buttons and validate", () => {
      // Click male button
      RadioButtonsPage.maleButton.click();
      // Validate message - You have selected male
      RadioButtonsPage.successMessage.should("have.text", "Yes");
      RadioButtonsPage.genderButton.should("have.text", "Male");
      RadioButtonsPage.successMessage.should("have.text", "Yes");
      // Click Impressive button
      RadioButtonsPage.stateAndCityButton.should("have.check", "NCR Delhi");
      RadioButtonsPage.successMessage.should("have.text", "Yes");
      // Validate message - You have selected Impressive
      RadioButtonsPage.successMessage.should("have.text", "Impressive");

      //RadioButtonsPage.radioButtons.contains("Yes").click();
      });
     
        cy.get(".table-responsive").should("contain", "Cute_Kitty_image.jpg");
      });
   
    });
  });
});