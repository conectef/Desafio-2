Feature: Gerenciamento de usuários

  Scenario: Criar, editar e deletar um registro
    Given que acesso a página de cadastro de usuários
    When crio um novo registro com dados "Teste", "Usuario", "teste@exemplo.com", 25, 1500, "Qualidade"
    And edito o registro criado
    Then deleto o registro criado

  Scenario: Criar 12 registros dinamicamente e deletar todos
    Given que acesso a página de cadastro de usuários
    When crio 12 novos registros dinamicamente
    Then deleto todos os registros criados
