Feature: Acessando o endpoint de criar o usuário da rota admin

    Rule: Como administrador, quero acessar uma rota, para que eu possa: criar usuários do B2C
        - senha: 8 digitos, com números, e uma letra no mínimo, e um caractere especial
        - siginID: Nao pode repetir o mesmo ID
        - Campos obrigatórios: displayName, passwordProfile{password: value}, identities[{issuerAssignedId/userPrincipalName, signinType, issuer}]


    @developed
    Scenario: Criando usuario apenas com os campos obrigatorios
        Given a requisicao para criar um usuario "CPF_validValuesMandatory"    
        Then o response deve ter o schema "createUser" com a requisicao "postUserCreatedMandatory"
        And deve retornar o statuscode 201
        And deve retornar o id do usuario
        But o usuario criado deve ser deletado


    @developed
    Scenario: Criando usuario com todos campos disponíveis
        Given a requisicao para criar um usuario "allValuesValid"    
        Then o response deve ter o schema "createUser" com a requisicao "postUserCreatedAllValues"
        And deve retornar o statuscode 201
        And deve retornar o id do usuario
        But o usuario criado deve ser deletado
        

    @developed
    Scenario: Criando usuario com password inválido
        Given a requisicao para criar um usuario "invalidPassword"    
        Then o response deve ter o schema "createUser" com a requisicao "postUserBadRequestInvalidPassword"
        And deve retornar o statuscode 400
        And deve retornar a mensagem de erro "Request_BadRequest"
    
    @developed
    Scenario: Criando usuario sem password
        Given a requisicao para criar um usuario "withoutPassword"   
        Then o response deve ter o schema "createUser" com a requisicao "postUserBadRequestWithouthPassword"
        And deve retornar o statuscode 400
        And deve retornar a mensagem de erro "Request_BadRequest"

    @developed
    Scenario: Criando usuario sem o displayName
        Given a requisicao para criar um usuario "withoutDisplayName"  
        Then o response deve ter o schema "createUser" com a requisicao "postUserBadRequestWithoutMandatoryValue"
        And deve retornar o statuscode 400
        And deve retornar a mensagem de erro "Request_BadRequest"


    @developed
    Scenario: Criando usuario sem o CPF
        Given a requisicao para criar um usuario "withoutCPF"  
        Then o response deve ter o schema "createUser" com a requisicao "postUserBadRequestWithoutMandatoryValue"
        And deve retornar o statuscode 400
        And deve retornar a mensagem de erro "Request_BadRequest"