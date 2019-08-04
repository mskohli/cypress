/// <reference types="Cypress" />

describe('Window Variable', () => {
    it('Fetch Window Variable', () => {
        cy.visit('./test.html');
        cy.window()
            .its('global')
            .should('equal', 1000);
    });
});

describe('API Testing', () => {
    it.only('Send Request', () => {
        cy.request(
            'http://dummy.restapiexample.com/api/v1/employee/15658'
        ).then(response => {
            expect(response.status).eq(200);
            expect(response.body).contains('id');
        });
    });
});
