Feature: Acessando o endpoint de busca da rota admin

    Rule: Como administrador, quero acessar uma rota, para que eu possa: Pesquisar os usuários do B2C


    Scenario: Listando todos usuários do Azure AD B2C   
        Given a requisicao para buscar por todos usuarios 
        Then o response deve ter o schema "researchUser" com a requisicao "getAllUsersOK"
        And deve retornar o statuscode 200
        And deve retornar uma lista de usuarios maior que 1