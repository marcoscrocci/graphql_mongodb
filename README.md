# GraphQL com MongoDB

Fonte: https://www.youtube.com/watch?v=7RoHxSGVAdU&list=PLPXWI3llyMiK9uw7tfljM2hnQl2qu6CeT

## Iniciar o projeto:
yarn init -y

## Instalar o Apollo Server e o GraphQL
yarn add apollo-server graphql

## Instruções básicas do GraphQL
Toda requisição é POST e bate no mesmo endpoint /graphql
Query -> Obter informações (GET)
Mutation -> Manipular dados (POST/PUT/PATCH/DELETE)
Scalar Types -> Strings, Int, Boolean, Float e ID

## Extensão VS Code para GraphQL
GraphQL Insiders
v0.3.5
GraphQL Foundation
2.962
(insiders edition for testing) GraphQL extension for VSCode adds syntax highlighting, validation, and lang

## Executar o Serviço:
node src/index.js

## Operação no Playground
query Query {
  hello
}

## Resposta no Playground
{
  "data": {
    "hello": "Hello world"
  }
}

## Instalar o Nodemon para a aplicação reiniciar automaticamente a cada alteração
yarn add nodemon -D

### Observações:
- Adicionar atributo scripts no package.json
- Executar o serviço com o comando:

yarn dev

## Instalar o Babel
yarn add @babel/core @babel/cli @babel/preset-env @babel/node -D

### Observação:
- Criar o arquivo .babelrc

## Instalar o mongoose
yarn add mongoose

## Instalar o Merge GraphQL Schema
yarn add merge-graphql-schemas


