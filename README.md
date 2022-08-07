# API_AUTH_AZURE_AD_B2C
## Ferramentas e linguagem

A Api foi construída em node js (javascript) e express. Para a visualização de documentação das rotas foi usado o *swagger* que é disponibilizado em um *endpoint* específico `/doc` e que permite consultar todos as rotas disponíveis para uso. Para organizar o projeto utilizou-se o husky, eslint, prettier, commitlint e commitizen. A estrutura do projeto **deve** seguir o seguinte padrão:

    src
    │   app.js # Inicializador do projeto (ponto de partida)
    └───api
	    └───controllers # Funções da controllers do express route
	    └───models # Modelos do banco de dados
	    └───services # Regras de negócio
	    └───subscribers # Eventos async
	    └───repositories* # Query builders
    └───config # Configuração das variaveis de ambiente
    └───jobs # Tarefas de rotinas
    └───node_modules # Modulos utilizados no app
    └───utils # Trechos de código pequeno
    └───helpers # Trechos de arquitetura de código
    └───types # Tipagem (d.ts) para Typescript

## Comandos para inicialização

Após clonar o projeto, para instalar os módulos externos execute o comando:

    yarn install

ao término, é necessário criar um arquivo com o nome `.env` na raiz do projeto contendo as seguintes chaves obtidas no Azure Ad B2C:

    APP_CLIENT_ID
    TENANT_ID
    APP_CLIENT_SECRET
    APP_REDIRECT_URI
    AUTHORITY

Feito isso, o projeto já pode ser dado *start* com o comando `yarn dev` que fará com que o *nodemon* escute na porta selecionada para cada mudança feita em código sem que precise *restartar* o server novamente. 

Para *debug*, ao utilizar o *vscode* (recomendado), acione o a tecla `F5` que inicializará o processo automaticamente no editor de código.

## Commits

O processo de *commit* é padronizado pela lib `commitlint` e auxiliado pela lib `commitizen`. Para realizar um commit, **não** utilizar o comando `git commit -m "..."`, mas sim o seguinte comando apenas:

    yarn commit

Ao fazer isso, o terminal abrirá opções com diálogos para criar o *commit* de forma padronizada como o `commitizen`.

## Swagger autogen

Para atualizar a documentação do swagger, é necessário executar o comando:

    node swagger-autogen

## Gitflow

Para a realização do projeto, foi padronizada o *gitflow* com a lib cli externa chamada [cheatsheet do git-flow](https://danielkummer.github.io/git-flow-cheatsheet/index.pt_BR.html). É possível entender o seu funcionamento de forma rápida lendo a sua documentação. O padrão adotado para a criação das *branches* então foi definido como `Id da task no Jira-nome-da-task`, sendo o nome da task todo em *lowercase* e *kebabcase*. Todos os padrões da lib cheatsheet foram utilizados e se encontram entre os módulos do projeto a ser instalado. Não é necessário instalá-lo globalmente. 
### Desenho do fluxo

![gitflow.drawio.png](./flows/gitflow.drawio.png)

## Azure AD B2C

### Maneiras de Desenvolver o sistema de autenticacao

#### Azure AD B2C Authentication

É a forma mais segura atualmente de estruturar o barramento pelo Azure AD B2C, 
visto que você utiliza a estrutura que a própria Microsoft disponibiliza.

#### OAuth 2.0 Implict Flow

O OpenID Connect (OIDC) é um protocolo de autenticação aberto que cria perfis e estende o OAuth 2.0 para adicionar uma camada de identidade . O OIDC permite que os clientes confirmem a identidade de um usuário final usando autenticação por um servidor de autorização.

#### OAuth 2.0 Device Flow
A plataforma de identidade da Microsoft oferece suporte à concessão de autorização de dispositivo , que permite que os usuários entrem em dispositivos com restrição de entrada, como smart TV, dispositivo IoT ou impressora. Para habilitar esse fluxo, o dispositivo faz com que o usuário visite uma página da Web em seu navegador em outro dispositivo para fazer login. Depois que o usuário fizer login, o dispositivo poderá obter tokens de acesso e atualizar tokens conforme necessário.

##### OAuth 2.0 ROPC

A plataforma de identidade da Microsoft oferece suporte à concessão de ROPC (credenciais de senha de proprietário do recurso) OAuth 2.0, que permite que um aplicativo entre no usuário manipulando diretamente sua senha. Este artigo descreve como programar diretamente no protocolo do seu aplicativo.

**OBS:** `A Microsoft recomenda que você não use o fluxo ROPC. Na maioria dos cenários, alternativas mais seguras estão disponíveis e são recomendadas. Esse fluxo requer um alto grau de confiança no aplicativo e carrega riscos que não estão presentes em outros fluxos.`


## Code Review
### Abrindo PR com a Feature

* **Primeiro é feito o commit localmente**
```shell
git add . 
yarn commit
git push origin feature/...

```
* **Após o push deve ser aberto a PR**

1. Acesse merge request
2. Selecione as branchs e clique em compare
3. Coloque para aprovar o membros da sua squad, outro desenvolvedor ou arquiteto

### Fluxo da PR

1. Alterou localmente

2. Subiu com as alterações com push

3. Abriu o PR

4. Colocar alguém que não te ajudou a desenvolver a funcionalidade para aprovar


# Executando pelo docker

É possível rodar o projeto localmente rodando o script `./startLocal.sh`
Para fazer o docker-compose down, rodar o script `./stopLocal.sh`

