describe('characters', () => {
  beforeEach(() => cy.visit('/'));

  it('should display search label', () => {
    cy.get('label').should('contain', 'Search by Name');
  });

  it('should display search input', () => {
    cy.get('input').should('be.visible');
  });

  it('should display search button', () => {
    cy.get('button').should('contain', 'Search');
  });
  it('should display charecter cards', () => {
    cy.get('[data-testid="card"]').should('be.visible');
  });

  it('should search work', () => {
    cy.get('input').type('san');
    cy.get('button').click();
    cy.get('[data-testid="card"]').should('have.length.above', 0);
  });

  it('should sort work', () => {
    cy.get('select').select('desc');
    cy.get('[data-testid="card"]').should('have.length.above', 0);
  });
});
