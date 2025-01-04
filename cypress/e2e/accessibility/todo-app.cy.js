describe('Todo app', () => {
    beforeEach(() => {
        cy.visit('https://context.reverso.net/');
        cy.injectAxe();
    });

    it('should log any accessibility issues', () => {
        cy.checkA11y();
    });

    it('displays exclude specific elements on the page', () => {
        cy.checkA11y({exclude: ['#home-mobile-badges-apps']});

    });

    it('should only test specific elements on the page', () => {
        cy.checkA11y('#home-mobile-badges-apps');
    });

    it('should only include rules with serious and critical impacts', () => {
        cy.checkA11y(null, {includedImpacts: ['critical', 'serious']});
    });

    it.only('should exclude specific accessibility rules', () => {
        cy.checkA11y(null, {rules: {'color-contrast': {enabled: false}}});
    });
});