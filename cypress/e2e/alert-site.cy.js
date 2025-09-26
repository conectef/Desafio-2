

describe('Desafio automação 2 - Browser Windows com Puppeteer', () => {

  it('Acessar site e validar nova janela', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.card-body').eq(2).click()
    cy.get('li.btn.btn-light').eq(10).click()
    cy.get('#windowButton').click()
    cy.visit('https://demoqa.com/sample')
    cy.get('#sampleHeading')
      .should('be.visible')
      .and('have.text', 'This is a sample page')
    })
})

