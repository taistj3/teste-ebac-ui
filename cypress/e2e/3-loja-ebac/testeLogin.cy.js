///<reference types="cypress"/>


beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  }) 

afterEach(() => {
    cy.screenshot()
});

describe('Funcionalidade: login', () => {
    
    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('taisteste@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, taisteste (não é taisteste? Sair)')
    })

    it('Deve exibir mensagem de erro ao inserir usuário invalido', () => {
        cy.get('#username').type('tais@teste.com')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('taisteste@teste.com')
        cy.get('#password').type('teste1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail taisteste@teste.com está incorreta')
        
        
    });

})