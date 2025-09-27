# 📘 Projeto de Automação – DemoQA

Este repositório contém uma coleção de **desafios de automação de testes** utilizando **Cypress**, **Cucumber** e **Puppeteer**, aplicados no site [DemoQA](https://demoqa.com/).
O objetivo é demonstrar habilidades práticas em **automação de testes de interface e lógica**.

---
## 📂 Estrutura do projeto

project/
├─ cypress/                     # Testes end-to-end com Cypress
│  ├─ e2e/                      # Cenários de teste
│  │  ├─ acessar-site.cy.js
│  │  ├─ sortable.cy.js         # Teste de lista ordenável
│  │  ├─ usuarios.feature       # Testes BDD de gerenciamento de usuários
│  │  └─ widget.cy.js           # Teste de barra de progresso
│  ├─ fixtures/
│  └─ support/
│     └─ step_definitions/      # Step definitions dos cenários BDD
│        └─ usuarios.steps.js
│        └─ commands.js
├─ puppeteer-tests/              # Automação em Node.js com Puppeteer
│  └─ janela-test.js             # Teste de abertura de janela e validação de conteúdo
├─ .gitignore                    # Arquivos e pastas ignorados pelo Git
├─ package.json                  # Dependências do projeto
├─ package-lock.json             # Controle de versões das dependências
└─ README.md                     # Documentação do projeto


## 📂 Estrutura dos Desafios

Cada desafio aborda uma funcionalidade diferente do site **DemoQA**.

---

### 🧪 Desafio 1 – Formulário de Cadastro (Cypress)
**Objetivo:**
Automatizar o preenchimento completo de um formulário, incluindo:
- Inserir nome, sobrenome, email e telefone
- Selecionar gênero
- Preencher data de nascimento
- Selecionar disciplinas e hobbies
- Upload de arquivo
- Selecionar estado e cidade
- Submeter e validar mensagem de sucesso

**Como rodar:**
1. Abra o Cypress com `npx cypress open`.
2. Execute o teste de formulário.
3. O teste irá preencher todos os campos obrigatórios e validar o envio do formulário.

---

### 🧪 Desafio 2 – Sortable List (Cypress)
**Objetivo:**
Validar a funcionalidade de ordenação de uma lista. O desafio consiste em:
- Acessar a seção “Sortable” no DemoQA
- Reorganizar os itens arrastando-os até ficarem em ordem crescente (One, Two, Three, Four, Five, Six)
- Validar que a lista final está correta

**Como rodar:**
1. Execute o teste de lista no Cypress.
2. O teste arrastará os elementos até a posição correta.
3. No final, valida se a lista ficou exatamente em ordem crescente.

---

### 🧪 Desafio 3 – Gerenciamento de Usuários (Cucumber/Gherkin)
**Objetivo:**
Automatizar cenários de cadastro de usuários usando **BDD (Behavior Driven Development)**.
Os cenários cobrem:
- Criar, editar e deletar um único registro
- Criar múltiplos registros dinamicamente (12 usuários) e depois deletar todos

**Como rodar:**
1. Rode os cenários BDD com `npx cypress run` (ou integrado ao `cypress-cucumber-preprocessor`).
2. O teste cria registros na tabela e realiza as operações de edição e exclusão.
3. Ao final, valida se todos os registros foram removidos corretamente.

---

### 🧪 Desafio 4 – Progress Bar (Cypress)
**Objetivo:**
Automatizar o controle da barra de progresso, garantindo:
- Iniciar a barra
- Parar automaticamente quando chegar em **25%** (com tolerância de ±1%)
- Retomar a execução
- Aguardar até atingir **100%**
- Resetar a barra para **0%**

**Como rodar:**
1. Execute o teste de progress bar no Cypress.
2. O teste monitora o progresso em tempo real.
3. Ele para em 25%, valida, continua até 100% e reseta no final.

---

### 🧪 Desafio 5 – Abertura de Nova Aba (Puppeteer)
**Objetivo:**
Automatizar o fluxo de abertura de uma nova janela do navegador.
O desafio consiste em:
- Acessar o menu “Browser Windows”
- Clicar no botão que abre uma nova aba
- Trocar para a nova aba e validar o texto exibido
- Fechar a aba aberta
- Encerrar o navegador

**Como rodar:**
1. Garanta que o **Node.js** está instalado.
2. Rode o comando:
   ```bash
   node nome-do-arquivo.js
O teste abrirá o navegador, validará o conteúdo da aba e encerrará o browser automaticamente.

---

## 🚀 Tecnologias Utilizadas
- **Cypress** → Testes end-to-end de UI
- **Cucumber/Gherkin** → Escrita de cenários BDD
- **Puppeteer** → Automação em Node.js

---

## ▶️ Como Executar

### Cypress
```bash
npx cypress open
npx cypress run
node nome-do-arquivo.js

## 📌 Próximos Passos
- Expandir os testes para mais componentes do DemoQA
- Adicionar integração contínua (CI/CD) no GitHub Actions
- Melhorar a cobertura de testes com relatórios automáticos
