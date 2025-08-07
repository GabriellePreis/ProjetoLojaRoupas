Cypress.Commands.add('acessarCategoriaJackets', () => {

  cy.visit('https://magento.softwaretestingboard.com/');
  cy.contains('Women', { timeout: 10000 }).trigger('mouseover', { force: true });
  cy.contains('Tops', { timeout: 10000 }).trigger('mouseover', { force: true });
  cy.contains('Jackets', { timeout: 10000 }).click({ force: true });
 });

Cypress.Commands.add('selecionarTamanhoeCordoPrimeiroProduto', () => {

    cy.get('.products-grid .product-item').first().within(() => {
    cy.get('[id^="option-label-size-"]').first().click().should('have.class', 'selected');
    cy.get('[id^="option-label-color-"]').eq(1).click().should('have.class', 'selected');
  });

});

Cypress.Commands.add('clicareSelecionaVariacoesDoPrimeiroProduto', () => {
  // Clica no link do primeiro produto para abrir a página de detalhes
  cy.get('.products-grid .product-item').first().find('.product-item-link').click();
  cy.get('.swatch-attribute.size .swatch-option').first().click().should('have.class', 'selected');
  cy.get('.swatch-attribute.color .swatch-option').eq(1).click().should('have.class', 'selected');
});

Cypress.Commands.add('adicionarProdutoAoCarrinho', () => {
  cy.get('.products-grid .product-item', { timeout: 10000 }).first().contains('Add to Cart').scrollIntoView().should('be.visible').click({ force: true });
});

Cypress.Commands.add('adicionarProdutoPelaPaginaDetalhes', () => {
  cy.get('button#product-addtocart-button')
    .should('be.visible')
    .click({ force: true });
});

Cypress.Commands.add('verificarCarrinhoCom1Item', () => {
  cy.get('.minicart-wrapper .counter.qty')
    .should('contain.text', '1');
});

Cypress.Commands.add('irParaCheckout', () => {
  cy.get('.showcart').click();
  cy.contains('Proceed to Checkout').should('be.visible').click();
  cy.url({ timeout: 10000 }).should('include', '/checkout');
});

Cypress.Commands.add('preencherFormularioCheckout', () => {
  cy.get('#customer-email', { timeout: 10000 }).should('be.visible').type('gabrielle@exemplo.com');
  cy.get('[name="firstname"]').should('be.visible').type('Gabrielle');
  cy.get('[name="lastname"]').should('be.visible').type('Teste');
  cy.get('[name="street[0]"]').should('be.visible').type('Rua Teste, 123');
  cy.get('[name="city"]').should('be.visible').type('Florianópolis');
  cy.get('[name="region_id"]').should('be.visible').select(1);
  cy.get('[name="postcode"]').should('be.visible').type('12345-6789');
  cy.get('[name="telephone"]').should('be.visible').type('99999999999');
  cy.get('.radio', { timeout: 10000 }).should('be.visible');
  cy.get('input[type="radio"]').first().check({ force: true });
  cy.get('.button.action.continue.primary').should('be.visible').click();
  cy.get('.checkout-payment-method', { timeout: 15000 }).should('be.visible');

});

Cypress.Commands.add('finalizarPedido', () => {
  cy.contains('Place Order', { timeout: 10000 }).should('be.visible').click();
  cy.contains('Thank you for your purchase!', { timeout: 15000 }).should('be.visible');
  cy.contains('Continue Shopping').should('be.visible');
});
