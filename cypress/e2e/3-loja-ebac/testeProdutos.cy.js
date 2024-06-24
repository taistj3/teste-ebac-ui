///<reference types="cypress"/>

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/#')
  })

  describe('Funcionalidade: produtos', () => {

    it('Deve selecionar um produto da lista', () => {
       cy.get(' .product-block ').first().click()
       cy.visit('http://lojaebac.ebaconline.art.br/produtos/#')
       cy.get(' .product-block ').last().click()
       cy.visit('http://lojaebac.ebaconline.art.br/produtos/#')
       cy.get(' .product-block ').eq(1).click()
       cy.visit('http://lojaebac.ebaconline.art.br/produtos/#')
       cy.get(' .product-block ').contains('Apollo Running Short').click()
       cy.get('#tab-title-description > a').should('exist')

    });
  });