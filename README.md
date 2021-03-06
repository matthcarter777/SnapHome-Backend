# Snap-Home
Desafio proposto para contruir aplicação funcional utilizando Node e Express
API construida utilizando Node.JS e PostgreSQL para armazemamento, manipilação de dados utilizando TypeORM E Typescript.

## Migrations 
  yarn typeorm migration:run

## Iniciar Servidor de teste 
  yarn dev

## Configurar usuario admin 
  acessar rota *http:/localhost/config*

## Iniciar testes
  yarn test

## Métodos

Requisições seguem o padrão

| Método | Descrição |
| ------ | ------- |
| `GET` | Retorno de um ou mais registros |
| `POST` | Criação de Registro |
| `PUT` | Autaliza um determinado Registro |
| `DELETE` | Remove um registro |

## Respostas

| Código| Descrição |
| ------ | ------ |
| `200`| Requisição executada com sucesso (success) |
| `400` | Registro não encontrado (not found) |

## Resposta de requisição 

Sucessso:

[POST] => Rota : /propertys (200)
```sh
  {
    "id": "dc327cfc-9db6-4720-a105-ec7faa7ea969",
    "title": "teste 5",
    "address": "rua 01",
    "city": "Campos Belos",
    "state": "Goias",
    "price": 80,
    "description": "teste de divulgação",
    "user_id": "e8103f95-1487-44af-ac16-db46a4435156"
  }
```

Erro:

[POST] => Rota : /propertys (400)
```sh
  {
    "message": "Equipment already exist!",
  }
```

