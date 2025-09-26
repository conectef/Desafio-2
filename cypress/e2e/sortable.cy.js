describe('Desafio automação sortable', () => {
  it('Organizar itens da lista em ordem crescente', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.card-body').eq(4).click()
    cy.get('li#item-0').eq(4).click()

    cy.get('.vertical-list-container > .list-group-item')
      .then(($items) => {
        const textos = [...$items].map(el => el.innerText.trim())
        const ordemCorreta = [...textos].sort()

        ordemCorreta.forEach((itemTexto, indexCorreto) => {
          const posAtual = textos.indexOf(itemTexto)

          if (posAtual !== indexCorreto) {
            // Seleciona o item que está fora de ordem
            cy.get('.vertical-list-container > .list-group-item')
              .eq(posAtual)
              .trigger('mousedown', { which: 1, force: true })

            // Move até a posição correta
            cy.get('.vertical-list-container > .list-group-item')
              .eq(indexCorreto)
              .trigger('mousemove', { force: true })
              .trigger('mouseup', { force: true })

            // Atualiza array local
            textos.splice(posAtual, 1)
            textos.splice(indexCorreto, 0, itemTexto)
          }
        })
      })

      const palavrasParaNumero = {
        'One': 1,
        'Two': 2,
        'Three': 3,
        'Four': 4,
        'Five': 5,
        'Six': 6,
      }

// Função para arrastar um item até o índice desejado
function dragItem(fromIndex, toIndex) {
  cy.get('.vertical-list-container > .list-group-item')
    .eq(fromIndex)
    .trigger('mousedown', { which: 1, force: true })
  cy.get('.vertical-list-container > .list-group-item')
    .eq(toIndex)
    .trigger('mousemove', { force: true })
    .trigger('mouseup', { force: true })
}

cy.get('.vertical-list-container > .list-group-item')
  .then(($items) => {
    // Converte os textos em números
    const lista = [...$items].map(el => palavrasParaNumero[el.innerText.trim()])

    // Exemplo: reorganizando manualmente para ordem crescente
    const ordemCorreta = [...lista].sort((a,b) => a-b)

    ordemCorreta.forEach((num, idx) => {
      const posAtual = lista.indexOf(num)
      if (posAtual !== idx) {
        dragItem(posAtual, idx)
        // Atualiza array local
        lista.splice(posAtual, 1)
        lista.splice(idx, 0, num)
      }
    })
  })

// Valida se o DOM está em ordem crescente
cy.get('.vertical-list-container > .list-group-item')
  .then(($final) => {
    const final = [...$final].map(el => palavrasParaNumero[el.innerText.trim()])
    expect(final).to.deep.eq([1,2,3,4,5,6])
  })
  })
})

