Feature: Acessando o sistema de autenticação com CPF

    Rule: Como usuário da iguá quero acessar o sistema com o CPF 
        - Ter CPF válido para Login 
        - Ter controle de CPF inválido e fluxo definido


    Background: Acessa o sistem de autenticação
        Given que acesso o sistema de autenticacao


    @developed
    Scenario: Autenticação com CPF válido
        When efetuo login com CPF "CPF_valid"
        Then devo ser autenticado


    @developed
    Scenario: Autenticação com CNPJ válido
        When efetuo login com CPF "CNPJ_valid" 
        Then devo ser autenticado


    Scenario: Autenticação com CPF inválido
        When efetuo login com CPF "CPF_invalid" 
        Then devo visualizar a mensagem "CPF ou CNPJ Inválido"


    Scenario: Autenticação com CNPJ inválido
        When efetuo login com CNPJ "CNPJ_invalid" 
        Then devo visualizar a mensagem "CPF ou CNPJ Inválido"


    Scenario: Autenticação com senha inválida
        When efetuo login com CPF "password_invalid" 
        Then devo visualizar a mensagem "Documento ou senha invalido."

    Scenario: Autenticação com conta não cadastrada
        When efetuo login com CPF "user_invalid" 
        Then devo visualizar a mensagem "Documento ou senha invalido."


    Scenario: Autenticação sem preencher o CPF
        When efetuo login com CPF "CPF_void" 
        Then devo visualizar a mensagem "CPF ou CNPJ Inválido"


    Scenario: Autenticação sem preencher o password
        When efetuo login com CPF "password_void"
        Then devo visualizar a mensagem "Por favor, insira sua senha"
