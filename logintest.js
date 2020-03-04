describe('Firsttest', function() {
    it('Title of the page', function() {
      cy.visit('https://stgapplicant.vetty.co/login')
      cy.get("#email").type("shweta.applicant+280@gmail.com")
      cy.get("#ssn").type("123456")
      cy.get(".form-control").click()
      cy.wait(4000)
    })
  })