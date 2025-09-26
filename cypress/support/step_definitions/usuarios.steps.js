import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

let usuarios = []

const gerarUsuario = (i) => ({
  firstName: `Teste${i}`,
  lastName: `Usuario${i}`,
  email: `user${i}@example.com`,
  age: 20 + i,
  salary: 1000 + i * 100,
  department: `Departamento${i}`
})

Given('que acesso a página de cadastro de usuários', () => {
  cy.visit('https://demoqa.com/')
  cy.get('.card-body').eq(0).click()
  cy.get('li#item-3').eq(0).click()
})

When('crio um novo registro com dados {string}, {string}, {string}, {int}, {int}, {string}', (firstName, lastName, email, age, salary, department) => {
  cy.get('#addNewRecordButton').click()
  cy.get('#firstName').type(firstName)
  cy.get('#lastName').type(lastName)
  cy.get('#userEmail').type(email)
  cy.get('#age').type(age)
  cy.get('#salary').type(salary)
  cy.get('#department').type(department)
  cy.get('#submit').click()
  usuarios.push({ firstName, lastName, email, age, salary, department })
})

When('edito o registro criado', () => {
  const user = usuarios[usuarios.length - 1]
  cy.get('#searchBox').clear().type(user.department)
  cy.contains('.rt-tbody .rt-tr-group', user.email)
    .find('[title="Edit"]')
    .click()
  cy.get('#firstName').clear().type(user.firstName + 'Editado')
  cy.get('#submit').click()
  user.firstName += 'Editado'
})

Then('deleto o registro criado', () => {
  const user = usuarios.pop()
  cy.get('#searchBox').clear().type(user.department)
  cy.contains('.rt-tbody .rt-tr-group', user.email)
    .find('[title="Delete"]')
    .click()
  cy.contains('.rt-tbody .rt-tr-group', user.email).should('not.exist')
})

When('crio 12 novos registros dinamicamente', () => {
  for (let i = 1; i <= 12; i++) {
    const user = gerarUsuario(i)
    usuarios.push(user)

    cy.get('#addNewRecordButton').click()
    cy.get('#firstName').type(user.firstName)
    cy.get('#lastName').type(user.lastName)
    cy.get('#userEmail').type(user.email)
    cy.get('#age').type(user.age)
    cy.get('#salary').type(user.salary)
    cy.get('#department').type(user.department)
    cy.get('#submit').click()
  }
})

Then('deleto todos os registros criados', () => {
  usuarios.forEach(user => {
    cy.get('#searchBox').clear().type(user.department)
    cy.contains('.rt-tbody .rt-tr-group', user.email)
      .find('[title="Delete"]')
      .click()
    cy.contains('.rt-tbody .rt-tr-group', user.email).should('not.exist')
  })
  usuarios = []
})
