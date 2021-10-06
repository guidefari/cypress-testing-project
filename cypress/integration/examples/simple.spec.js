describe('Browser actions', () => {
    it('should load correct url', () => {
        cy.visit('http://example.com', {timeout: 10000})
    });

    it('should check correct url', () => {
        cy.url().should('include', 'example.com')
    });

    it('should find the correct elements on the page', () => {
        cy.get('h1').should('be.visible') 
    });
})
