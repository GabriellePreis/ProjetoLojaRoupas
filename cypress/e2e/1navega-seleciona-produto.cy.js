describe('Buscar produto', () => {

  it('Deve acessar uma categoria de produtos no menu principal', () => {

    // Acessa a categoria de jaquetas femininas
    cy.acessarCategoriaJackets();

  });

  it.only('Deve escolher cor e tamanho de um produto', () => {


    cy.acessarCategoriaJackets();
    cy.selecionarTamanhoeCordoPrimeiroProduto();

});

    it('Deve acessar a pagina de detalhes de um produto', () => {

    cy.acessarCategoriaJackets();
    cy.get('.products-grid .product-item').first().find('.product-item-link').click();
    cy.get('.page-title span').should('be.visible').and('not.be.empty');

  });

});