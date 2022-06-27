# API para Games    

## Descrição    
API exemplo para gestão de games.    

## EndPoints

- ### POST /auth    
Responsável por gerar Token de autenticação.    

#### Parâmetros    
email: email cadastrado no sistema.    
password: senha cadastrada no sistema, referente ao email.    

```json
{
    "email": "felipefclariano04@gmail.com",
    "password": "senha123"
}
```    

#### Respostas
##### 200 OK!
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmZWxpcGVmY2xhcmlhbm8wNEBnbWFpbC5jb20iLCJpYXQiOjE2NTYyOTM3MjMsImV4cCI6MTY1NjQ2NjUyM30.E37LjpU7mPTMMmYK-9eLyjaPQ2MbFSvLbBLWWR3rfnQ"
}
```

##### 400 - Bad Request.
```json
{
    "err": "Email inválido ou ausente."
}
```
```json
{
    "err": "Senha ausente."
}
```

##### 401 - Unauthorized.
```json
{
    "err": "Credenciais inválidas."
}
```

##### 404 - Not Found.
```json
{
    "err": "O email enviado não exite na base de dados."
}
```

##### 500 - Internal Server Error.
```json
{
    "err": "Erro interno."
}
```

***

- ### GET /games    
Responsável por retornar todos os games do database    

#### Parâmetros    
Nenhum

#### Respostas
##### 200 - OK
```json
[
    {
        "id": 1,
        "title": "Minecraft",
        "year": "2012",
        "price": 30,
        "createdAt": "2022-06-22T23:41:56.000Z",
        "updatedAt": "2022-06-22T23:41:56.000Z"
    },
    {
        "id": 2,
        "title": "Sea of Thieves",
        "year": "2018",
        "price": 50.9,
        "createdAt": "2022-06-22T23:41:56.000Z",
        "updatedAt": "2022-06-23T21:54:52.000Z"
    },
    {
        "id": 3,
        "title": "Call of Dutty MW",
        "year": "2019",
        "price": 60,
        "createdAt": "2022-06-22T23:41:56.000Z",
        "updatedAt": "2022-06-22T23:41:56.000Z"
    },
    {
        "id": 4,
        "title": "Transformice",
        "year": "2010",
        "price": 0,
        "createdAt": "2022-06-23T16:27:06.000Z",
        "updatedAt": "2022-06-23T16:27:06.000Z"
    },
    {
        "id": 7,
        "title": "Sonic",
        "year": "1991",
        "price": 10.75,
        "createdAt": "2022-06-23T16:33:58.000Z",
        "updatedAt": "2022-06-23T17:24:29.000Z"
    },
    {
        "id": 9,
        "title": "Ben 10 - Protector of Earth",
        "year": "2007",
        "price": 12,
        "createdAt": "2022-06-24T00:48:31.000Z",
        "updatedAt": "2022-06-24T00:48:31.000Z"
    },
    {
        "id": 10,
        "title": "Rocket League",
        "year": "2015",
        "price": 0,
        "createdAt": "2022-06-24T00:52:10.000Z",
        "updatedAt": "2022-06-24T20:27:57.000Z"
    }
]
```

##### 500 - Internal Server Error.
```json
{
    "err": "Erro interno."
}
```

***

- ### GET /game/:id
Responsável por retornar dados de um game específico.

#### Parametros
:id - id do game que deseja ver os dados.    

##### Exemplos
`/game/4`    
`/game/25`

#### Respostas

##### 200 OK!
```json
{
    "id": 3,
    "title": "Call of Dutty MW",
    "year": "2019",
    "price": 60,
    "createdAt": "2022-06-22T23:41:56.000Z",
    "updatedAt": "2022-06-22T23:41:56.000Z"
}
```

##### 400 Invalid request.
```json
{
    "err": "ID inválido"
}
```

##### 404 - Not Found.
```json
{
"err": "Game não encontrado."
}
```

***

- ### POST /game
Responsável por cadastrar um game no database.

#### Parametros
title: Título do game    
year: Ano de lançamento do game    
price: Preço do jogo    

```json
{
    "title": "League of Legends",
    "year": "2009",
    "price": 0
}
```

#### Respostas

##### 200 OK!
undefined    

##### 400 Bad Request.
```json
{
    "err": "Título inválido ou ausente."
}
```
```json
{
    "err": "Ano de lançamento inválido ou ausente."
}
```
```json
{
    "err": "Preço inválido ou ausente."
}
```

***

- ### DELETE /game/:id
Responsável por deletar um game específico do database.

#### Parametros
:id - id do game que deseja deletar.    

##### Exemplos
`/game/4`    
`/game/25`

#### Respostas

##### 200 OK!
undefined

##### 400 Bad Request.
```json
{
    "err": "ID inválido."
}
```

##### 500 Internal Server Error.
```json
{
    "err": "Erro interno."
}
```

***

- ### PUT /game/:id
Responsável por editar games no database.

#### Parametros
:id - id do game que deseja editar.    

##### Exemplos
`/game/4`    
`/game/25`

#### Respostas

##### 200 OK!
undefined

##### 400 Bad Request.
```json
{
    "err": "ID inválido."
}
```
```json
{
    "err": "Ano de lançamento inválido."
}
```
```json
{
    "err": "Preço inválido."
}
```

##### 404 Not Found.
```json
{
    "err": "Game não encontrado."
}
```

##### 500 Internal Server Erro.
```json
{
    "err": "Erro interno."
}
```
