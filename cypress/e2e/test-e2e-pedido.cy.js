/// <reference types="cypress" />
import usuario from "../fixtures/usuarios.json"

describe('Testes de ponta a ponta de Pedido no SauceDemo', () => {
    
    beforeEach(() => {
        //visita url e faz login
        cy.login(usuario.userName, usuario.password)
    });
    
    it('Deve fazer o pedido de ponta a ponta', () => {
        
        //adiciona produtos no carrinho
        //por nome
        cy.addProdutoPorNome('Sauce Labs Fleece Jacket')
        cy.addProdutoPorNome('Sauce Labs Onesie')
        //por posicao
        cy.addProdutoPorPosicao(0)
        cy.addProdutoPorPosicao(5)

        //acessa carrinho
        cy.get('[data-test="shopping-cart-link"]').click()

        //vai pro checkout
        cy.get('[data-test="checkout"]').click()

        //Preencher cadastro ficha do carrinho
        cy.cadastroFicha('TesteNome', 'TesteSobrenome', '123456')

        //Finaliza carrinho
        cy.get('[data-test="finish"]').click()

        cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order!')
    });
    
});