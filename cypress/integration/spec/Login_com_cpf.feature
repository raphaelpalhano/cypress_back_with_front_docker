Feature: Acessando o sistema de autenticação com CPF

    Rule: Como usuário da iguá quero acessar o sistema com o CPF


    #Background: Acessa o sistem de autenticação
    #   Given que acesso o sistema de autenticação

 

    Scenario: Autenticação com CPF válido
        Given que acesso o sistema de autenticacao
        When efetuo login com CPF "valid"
        #Then devo visualizar o painel da igua