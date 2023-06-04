describe('scenarios', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/automation-practice-form')
  });
});

//TextBoxPage.uploadPicture('files/Cute_Kitty_image.jpg');
TextBoxPage.uploadPicture.selectFile('images/Cute_Kitty_image.jpg');
