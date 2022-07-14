Feature: Acessando o sistema de autenticação com CPF

    Rule: Como usuário da iguá quero acessar o sistema com o CPF 
        - Ter CPF válido para Login 
        - Ter controle de CPF inválido e fluxo definido


    Background: Acessa o sistem de autenticação
        Given que acesso o sistema de autenticacao


    @focus
    Scenario: Autenticação com CPF válido
        When efetuo login com CPF "valid"
        Then devo ser autenticado


    Scenario: Autenticação com CPF válido
        When efetuo login com CPF "valido" 
        Then devo ser autenticado



    Scenario: Autenticação com CNPJ válido
        When efetuo login com CPF "valido" 
        Then devo ser autenticado


    Scenario: Autenticação com CPF inválido
        When efetuo login com CPF "invalido" 
        Then devo visualizar a mensagem "CPF ou CNPJ Inválido"



    Scenario: Autenticação com CNPJ inválido
        When efetuo login com CNPJ "invalido" 
        Then devo visualizar a mensagem "CPF ou CNPJ Inválido"



    Scenario: Autenticação sem preencher o CPF
        When efetuo login com CPF "CPF_void" 
        Then devo visualizar a mensagem "CPF ou CNPJ Inválido"



    Scenario: Autenticação com senha inválida
        When efetuo login com CPF "password_invalido" 
        Then devo visualizar a mensagem "Sua senha está incorreta."



    Scenario: Autenticação sem preencher o password
        When efetuo login com CPF "password_void"
        Then devo visualizar a mensagem "Por favor, insira sua senha"