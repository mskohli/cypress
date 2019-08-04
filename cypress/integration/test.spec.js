/// <reference types="Cypress" />

describe('Window Variable', () => {
    it('Fetch Window Variable', () => {
        cy.visit('./test.html');
        cy.window()
            .its('global')
            .should('equal', 1000);
    });
});
