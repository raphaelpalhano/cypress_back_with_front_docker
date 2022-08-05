Feature: Acessando o endpoint de busca da rota admin

    Rule: Como administrador, quero acessar uma rota, para que eu possa: Pesquisar os usuários do B2C


    @developed
    Scenario: Atualizando um usuário válido
        Given a requisicao para criar um usuario "CPF_validValuesMandatory"
        When faz o update do usuario valido
        Then o response deve ter o schema "updateUser" com a requisicao "updateUserSuccess"
        And deve retornar o statuscode 204
        And o usuario deve ter o displayname alterado