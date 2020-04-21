describe('Click Event', () => {
    it('click', () => {
      cy.visit('/')
      cy.get('button').click();
    })
  })