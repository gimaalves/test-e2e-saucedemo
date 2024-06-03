// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (usuario, senha) => { 
    cy.visit('/')
    cy.get('[data-test="username"]').clear().type(usuario, {log: false})
    cy.get('[data-test="password"]').clear().type(senha, {log: false})
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('cadastroFicha', (nome, sobrenome, cep) => { 
    cy.get('[data-test="firstName"]').clear().type(nome)
    cy.get('[data-test="lastName"]').clear().type(sobrenome)
    cy.get('[data-test="postalCode"]').clear().type(cep)
    cy.get('[data-test="continue"]').click()
})

Cypress.Commands.add('addProdutoPorNome', (produto) => { 
    cy.contains(produto).click()
    cy.get('[data-test="add-to-cart"]').click()
    cy.get('[data-test="back-to-products"]').click()
})

Cypress.Commands.add('addProdutoPorPosicao', (posicao) => { 
    cy.get('.btn_inventory').eq(posicao).click()
})

