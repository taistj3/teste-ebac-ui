///<reference types="cypress"/>


beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});

  describe('Funcionalidade - lista de produtos', () => {

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get(' .product-block ').first().click()
        cy.get('#tab-title-description > a').should('exist')
    });

    it('Deve selecionar o último produto da lista', () => {
        cy.get(' .product-block ').last().click()
        cy.get('#tab-title-description > a').should('exist')
     });

     it('Deve selecionar o segundo produto da lista', () => {
        cy.get(' .product-block ').eq(1).click()
        cy.get('#tab-title-description > a').should('exist')
     });

     it('Deve selecionar o quinto produto da lista', () => {
        cy.get(' .product-block ').contains('Apollo Running Short').click()
        cy.get('#tab-title-description > a').should('exist')
     });
        
    });