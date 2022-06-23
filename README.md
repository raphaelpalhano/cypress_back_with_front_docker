# Projeto Iguá CIAM

<br>

# Gitflow



## Praticando com Git Flow
 
<br>

### Antes de começar 
 
1. Primeiro passo é verificar se o git-flow já veio instalado com o seu git:


```shell 
git flow version
```
Se não exibir a versão, significa que você precisa instalar o gitl-flow.

<br>

### Instalando git-flow
 
<br>

#### Mac

```shell
 
  brew install git-flow-avh
``` 

#### Macports

```shell 
$ port install git-flow-avh
``` 


#### Windows

```powershell 

wget -q -O - --no-check-certificate https://raw.github.com/petervanderdoes/gitflow-avh/develop/contrib/gitflow-installer.sh install stable | bash
Acesse também o tutorial: Installing on Windows · petervanderdoes/gitflow-avh Wiki 

```

Linux

```shell 
apt-get install git-flow
``` 

<br>


### Iniciando o git flow
 
<br>


```powershell
git flow init
```


**OBS: O git flow já vem com o git instalado e após executar o comando ele irá perguntar sobre as branchs.**

* Branch de produção?

* A branch de desenvolvimento?

* Branch de support? [feature, bugfix]

 

**OBS: Ao finalizar todas as perguntas o git flow irá direcionar para branch develop de imediato.**

 
<br>

### Alterações na develop

<br> 

**OBS: Parar alterar a develop primeiro é feito a mudança para branch feature e depois o merge para develop.**

<br>

### Novas funcionalidades e atualização: branch feature

* Da branch develop você vai para branch feature 

* Passando para branch feature para desenvolver uma nova atualização dentro do projeto e manter a develop funcionando.

```shell
git flow feature start function_stages

```

* `git flow - é o comando que indica que você está trabalhando com git flow`
* `feature - é o comando para indicar que você vai iniciar ou finalizar o trabalho em uma branch feature.`

* `start - comando que indica que você vai começar algo novo.`

* `function_stages - é o nome da branch feature.`

<br>
 
1. Comece a fazer as alterações e atualizações na branch feature conforme foi definido. Depois comece os commits.

```shell
git add .
git commit -m “add function stages control”
``` 

<br>

2. Não tem mais nada para alterar, pode voltar para develop

**PR no Git lab**

```shell
git push origin feature/function

Abrir o PR

``` 
 
<br> 

**Finish com git flow**

```shell
git flow feature finish function_stages
```
**OBS: O comando vai fazer o merge para develop e  excluir a branch localmente e do github e mudar para develop.**

<br> 

3. Continuar o desenvolvimento da funcionalidade daquela feature, faz o publish.

```shell
git flow feature publish function_stages
```
**OBS: Vai fazer o push da branch feature no github, ou, o repositório que estiver utilizando.**

 
<br>
 
### Iniciando a release para produção
 
<br>

### Iniciar a branch da release

```shell
git flow release start 1.0
```
**OBS: foi criado a release 1.0 e entrou na branch.** É feito o teste, caso der algum problema, o bug deve ser resolvido na branch release. 
Após os teste é finalizado a release para que seja feito merge com a main.


<br>

#### Se não houver problema

<br>

**PR no Git lab**

```shell
git push origin release/1.0
ABRIR PR no gitlab
```

<br>

**Finish com git flow**

```shell
git flow release finish 1.0
```

<br>

### Se houver problema


**O problema deve ser ajustado na própria release, caso seja algo complexo criar um bugfix.**


```shell
git add . 

git commit -m “...”

git push origin release/1.0

```

### Hotfix

<br>

Quero fazer pequenas modificações em um script para produção, hotfix. Quero colocar uma variável, a cor de um elemento do dom, a largura de um elemento, corrigir um pequeno problema, etc.

 

1. A partir da branch main/master eu faço o seguinte comando**

```shell
git flow hotfix start 1.1
```

2. Faço as alterações para corrigir o problema ou atualizar algo sem modificar nenhuma estrutura.

<br> 

3. faço o commit 

```shell
git add .
git commit -m “...”
```
<br>

4. Finalizo a hotfix 


**PR no Git lab**

```shell
git push origin hotfux/1.1
ABRIR PR no gitlab
```

<br>


**Finish com git flow**

```shell
git flow hotfix finish 1.1

```

**OBS:Será feito o merge para main e develop. E será jogado para branch develop**

<br> 

#### Alguém precisa trabalhar nessa hotfix?
 
```shell
git flow hotfix publish 1.1
```
