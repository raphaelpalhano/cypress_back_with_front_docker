Feature: Acessando o endpoint de busca da rota admin

    Rule: Como administrador, quero acessar uma rota, para que eu possa: Pesquisar os usuários do B2C


    @developed
    Scenario: Listando todos usuários do Azure AD B2C   
        Given a requisicao para buscar por todos usuarios 
        Then o response deve ter o schema "researchUser" com a requisicao "getAllUsersOK"
        And deve retornar o statuscode 200
        And deve retornar uma lista de usuarios maior que 1

    @developed
    Scenario: Buscando por usuário válido específico do Azure AD B2C
        Given a requisicao para buscar por todos usuarios 
        When a requisicao para buscar por um usuario valido
        Then o response deve ter o schema "researchUser" com a requisicao "getUserIdOK"
        And deve retornar o statuscode 200
        And deve retornar o id da requisicao
    
    @developed
    Scenario: Buscando por usuário inválido específico do Azure AD B2C
        Given a requisicao para buscar por um usuario invalido
        Then o response deve ter o schema "researchUser" com a requisicao "getUserIdBadRequest"
        And deve retornar o statuscode 404
        And deve retornar a mensagem de erro "Request_ResourceNotFound"

    