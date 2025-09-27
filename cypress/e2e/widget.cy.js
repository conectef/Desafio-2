describe('Desafio automação Progress Bar', () => {
  it('Testa progress bar com start, stop e reset', () => {
    cy.visit('https://demoqa.com/')
    cy.get('.card-body').eq(3).click()
    cy.get('li#item-4').eq(2).click()

    const startButton = '#startStopButton'
    const resetButton = '#resetButton'
    const progressBar = '.progress-bar'

    cy.get(startButton).click()

    // Função para parar em 25%
    function stopAt25() {
      cy.get(progressBar)
        .invoke('attr', 'aria-valuenow')
        .then(val => {
          const valor = parseInt(val)
          if (isNaN(valor)) {
            cy.wait(50).then(stopAt25) // Espera se o valor não estiver disponível
          } else if (valor < 25) {
            cy.wait(50).then(stopAt25) // Continua monitorando se < 25%
          } else {
            // Para a barra quando atingir ou ultrapassar 25%
            cy.get(startButton).click()
            cy.wait(500) // Aguarda estabilização
            cy.get(progressBar)
              .invoke('attr', 'aria-valuenow')
              .then(finalVal => {
                const finalValor = parseInt(finalVal)
                expect(finalValor).to.be.within(24, 26) // Tolerância para 24-26%
                continueTo100()
              })
          }
        })
    }

    // Função para continuar até 100%
    function continueTo100() {
      // Retoma a progressão (clica apenas uma vez)
      cy.get(startButton).click() // Clique único para retomar
      // Monitora o progresso até 100%
      function monitorProgress() {
        cy.get(progressBar)
          .invoke('attr', 'aria-valuenow')
          .then(val => {
            const valor = parseInt(val)
            if (valor < 100) {
              cy.wait(50).then(monitorProgress) // Monitora sem clicar novamente
            } else {
              expect(valor).to.be.at.least(100) // Aceita 100 ou mais
              cy.get(resetButton).click()
              cy.wait(500) // Aguarda o reset
              cy.get(progressBar).should('have.attr', 'aria-valuenow', '0')
            }
          })
      }
      monitorProgress()
    }

    stopAt25()
  })
})