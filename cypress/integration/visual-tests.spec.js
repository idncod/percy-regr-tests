describe('Visual Regression Tests', () => {
    it('should display the homepage correctly', () => {
        cy.visit('index.html');
        cy.percySnapshot('Homepage');
    });
});
