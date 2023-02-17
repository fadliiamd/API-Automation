/// <reference types="cypress" />

describe('Website test', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.url('').should('include', '')
    });

    it('Should try login', () => {
        cy.fixture('example').then(user => {
            const username = user.usernamesauce
            const password = user.passwordsauce
            
            cy.loginsauce(username, password)
            // cy.get('#user-name').type(username)
            // cy.get('#password').type(password)
            // cy.get('#login-button').click()
        })
    });
    it('Should try burger button', () => {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#react-burger-menu-btn').should('have.text', 'Open Menu')

        // cy.get('#about_sidebar_link').click()
        // cy.get('#about_sidebar_link').should('have.text', 'About')

        cy.get('#react-burger-cross-btn').click()
        cy.get('#react-burger-cross-btn').should('have.text', 'Close Menu')
    });
    it('Should try inventory', () => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').should('have.text', '1')

        cy.get('#remove-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').should('have.text', '')

        cy.get('#item_4_title_link').click()
        cy.get('.inventory_details_name').should('have.text', 'Sauce Labs Backpack')
    });
});