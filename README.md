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
##### 200 - OK
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmZWxpcGVmY2xhcmlhbm8wNEBnbWFpbC5jb20iLCJpYXQiOjE2NTYyOTM3MjMsImV4cCI6MTY1NjQ2NjUyM30.E37LjpU7mPTMMmYK-9eLyjaPQ2MbFSvLbBLWWR3rfnQ"
}
```

##### 400 - Email inválido ou ausente.
```json
{
    "err": "Email inválido ou ausente."
}
```

##### 400 - Senha ausente.
```json
{
    "err": "Senha ausente."
}
```

##### 404 - O email enviado não exite na base de dados.
```json
{
    "err": "O email enviado não exite na base de dados."
}
```


##### 401 - Credenciais inválidas
```json
{
    "err": "Credenciais inválidas."
}
```

##### 500 - Erro interno
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

##### 500 - Erro interno
```json
{
    "err": "Erro interno."
}
```

#####


LEMBRAR DE RE UPAR OS ARQUIVOS
