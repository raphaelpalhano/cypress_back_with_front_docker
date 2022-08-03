Feature: Acessando o sistema de autenticação com CPF

    Rule: Como usuário da iguá quero acessar o sistema com o CPF 
        - Ter CPF válido para Login 
        - Ter controle de CPF inválido e fluxo definido


    Background: Acessa o sistem de autenticação
        Given que acesso o sistema de autenticacao

    @developed
    Scenario: Autenticação com CPF válido
        When efetuo login valido com "CPF_valid"
        Then devo ser autenticado

    @developed
    Scenario: Autenticação com CNPJ válido
        When efetuo login valido com "CNPJ_valid" 
        Then devo ser autenticado


    @developed
    Scenario: Autenticação com CPF inválido
        When efetuo login invalido com "CPF_invalid" 
        Then devo visualizar a mensagem "Documento inválido."

    @developed
    Scenario: Autenticação com CNPJ inválido
        When efetuo login invalido com "CNPJ_invalid" 
        Then devo visualizar a mensagem "Documento inválido."


    @developed
    Scenario: Autenticação com senha inválida
        When efetuo login invalido com "password_invalid" 
        Then devo visualizar a mensagem generica "Documento e/ou senha inválidos."


    @developed
    Scenario: Autenticação com conta não cadastrada
        When efetuo login invalido com "user_invalid" 
        Then devo visualizar a mensagem generica "Documento e/ou senha inválidos."


    @developed
    Scenario: Autenticação sem preencher o CPF
        When efetuo login invalido com "CPF_void" 
        Then devo visualizar a mensagem "Documento inválido."



