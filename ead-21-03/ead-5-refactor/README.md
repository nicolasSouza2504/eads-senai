# EAD - Refactored Project

## Descrição do Projeto

Este projeto é foi desenvolvido inicialmente na versão a fim de ser uma refatoração da versão `ead-5`. O objetivo da refatoração foi melhorar a estrutura do código, aplicar boas práticas de desenvolvimento e otimizar a manutenção a longo prazo.

As mudanças realizadas na refatoração visam uma arquitetura mais limpa, maior modularização, melhor organização de pastas e melhoria no gerenciamento de dependências. Além disso, foi realizada a correção de problemas de performance e usabilidade encontrados na versão original.

## Passos para Rodar o Projeto

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/nicolasSouza2504/eads-senai.git

2. Acesse a pasta do projeto:
   ```bash
   cd eads-senai/ead-21-03/ead-5-refactor

3. Abra o arquivo home.html

## Problemas Encontrados e Ajustes Realizados


Durante o processo de desenvolvimento e refatoração, vários problemas foram identificados na versão original ead-5. Abaixo estão os principais problemas encontrados e as justificativas para os ajustes realizados:

1. **Estrutura de Pastas Confusa**

   Na versão ead-5, a estrutura de pastas estava desorganizada, o que dificultava a escalabilidade do projeto e a colaboração entre desenvolvedores.

    **Correção**: Foi implementada uma estrutura mais limpa e organizada, com pastas bem definidas para componentes, serviços, e utilitários.


2. **Código Redundante**

   O código na versão ead-5 continha várias partes duplicadas, o que tornava a manutenção difícil e aumentava a chance de erros.
   
    **Correção:** Durante a refatoração, refatoramos funções e componentes repetidos, tornando o código mais reutilizável e fácil de manter.

3. **Falta de Modulação**

    O código não estava suficientemente modularizado, o que dificultava testes e manutenção.
    **Correção:** A refatoração focou na criação de módulos e componentes bem definidos, permitindo que funcionalidades específicas fossem isoladas, facilitando testes e evitando acoplamento excessivo.


4. **Problemas de Usabilidade e Layout**

   A versão ead-5 apresentava alguns problemas de usabilidade, como interfaces pouco intuitivas e funções mal documentadas.
   
   **Correção:** A interface foi aprimorada para garantir uma melhor experiência ao usuário, e a documentação do código foi ampliada, tornando-a mais acessível a novos desenvolvedores.

5. **Legibilidade Código**

    O código em muitas partes estava com a legibilidade muito ruim, com nomes estranhos para funções e código mal organizado.
    
    **Correção:** A refatoração ajuda a remover duplicações e simplificar a lógica do código, tornando-o mais fácil de ler e entender. Isso facilita a leitura por outros desenvolvedores, inclusive os novos membros da equipe.


## Conclusão
A refatoração realizada trouxe melhorias significativas no desempenho, manutenção e escalabilidade do projeto. O código foi limpo, modularizado e testado, com um foco claro na melhoria da qualidade e experiência do usuário. As mudanças implementadas não apenas corrigiram os problemas encontrados, mas também prepararam o projeto para futuros desenvolvimentos e contribuições.


