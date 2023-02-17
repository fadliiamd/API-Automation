/// <reference types="cypress" />

describe('Searchbox Test', () => {
    it('Visit the website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url('').should('include', 'login.html')
    });
    it('Should try login', () => {
        cy.fixture("example").then(user => {
            const username = user.username
            const password = user.password
            cy.login(username, password)
        })
    });
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });
    it('Should show search result page', () => {
        cy.get('h2').contains('Search Results:')
    });
});