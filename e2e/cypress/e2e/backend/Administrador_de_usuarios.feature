Feature: Acessando a rota de administrador de usuarios

    Rule: Como administrador, quero acessar uma rota, para que eu possa: Incluir; Excluir; Pesquisar; Listar; os usuários


    @developed
    Scenario: Listando todos usuários do Azure AD B2C
        Given a requisicao para buscar por todos usuarios
        Then o response deve ter o schema "admin" com a requisicao "getAllUsers"
        And deve retornar o statuscode 200
