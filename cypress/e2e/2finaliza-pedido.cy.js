 /// <reference types="cypress" />

 
 describe('Finalizar Pedido', () => {

    it('Deve redirecionar para página de detalhes do produto se não especificar cor e tamanho', () => {

    cy.acessarCategoriaJackets();
    cy.get('.products-grid .product-item').first().trigger('mouseover');
    cy.get('.products-grid .product-item').first().within(() => {
    cy.contains('Add to Cart').scrollIntoView().should('be.visible').click({ force: true });
  });
      cy.get('.page-title span', { timeout: 10000 }).should('be.visible').and('not.be.empty');
      cy.contains('You need to choose options for your item', { timeout: 10000 }).should('be.visible');
});

  it('Deve Finalizar pedido com sucesso pela página de lista de produtos quando disponível', () => {

      cy.acessarCategoriaJackets();
      cy.selecionarTamanhoeCordoPrimeiroProduto();
      cy.adicionarProdutoAoCarrinho();
      cy.verificarCarrinhoCom1Item();
      cy.irParaCheckout();
      cy.preencherFormularioCheckout();
      cy.finalizarPedido();

  });
 
    it('Deve Finalizar pedido com sucesso pela página de detalhes de um produto específico', () => {

      cy.acessarCategoriaJackets();
      cy.clicareSelecionaVariacoesDoPrimeiroProduto();
      cy.adicionarProdutoPelaPaginaDetalhes();
      cy.verificarCarrinhoCom1Item();
      cy.irParaCheckout();
      cy.preencherFormularioCheckout();
      cy.finalizarPedido();
      
    });

   it.only('Deve remover item do carrinho', () => {

      cy.acessarCategoriaJackets();
      cy.clicareSelecionaVariacoesDoPrimeiroProduto();
      cy.adicionarProdutoPelaPaginaDetalhes();
      cy.verificarCarrinhoCom1Item();
      cy.get('.showcart').click();
      cy.get('.minicart-items-wrapper .product-item .action.delete').should('be.visible').click();
      cy.get('button.action-primary.action-accept[data-role="action"]:visible', { timeout: 10000 }).click();
    
   });
  
  });