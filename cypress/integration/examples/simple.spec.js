describe('Browser actions', () => {
    it('should load correct url', () => {
        cy.visit('http://example.com', {timeout: 10000})
    });

    it('should check correct url', () => {
        cy.url().should('include', 'example.com')
    });

    // implicit wait
    it('should wait for 3 seconds', () => {
        cy.wait(3000)
    });

    // pause - good for debugging
    it('should pause the thingy ma bob', () => {
        cy.pause()
    });
    
    it('should find the correct elements on the page', () => {
        cy.get('h1').should('be.visible') 
    });
})
