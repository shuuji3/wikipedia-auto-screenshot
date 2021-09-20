/// <reference types="cypress" />

context('Cypress.Screenshot', () => {
  const pages = require('../fixtures/programming-languages-pages.json');
  pages.forEach(({ url, name }) => {
    it(name, () => {
      cy.visit(url);
      cy.screenshot(name.replace('/', '-'), { capture: 'viewport' });
    });
  });
});
