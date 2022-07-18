Feature: Acessando o sistema de autenticação com CPF

    Rule: Como usuário da iguá quero acessar o sistema com o CPF 
        - Ter CPF válido para Login 
        - Ter controle de CPF inválido e fluxo definido

    @developed
    Scenario: Acessa o sistem de autenticação
        Given que acesso o sistema de autenticacao