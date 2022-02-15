## Desafio

### 1. Interace HTTP REST API

Para executar a API abra a pasta desafio-api 


**Instalação de dependências**
 Não se esqueça de rodar o comando

```yarn install```

Utilize o Docker para carregar e depois disponibilizar todos os serviços necessários ao funcionamento do Siga-Doc:

```docker-compose up```


O servidor irá executar

### para criar uma tag utilize a rota 

```POST -> /tags

com o body 

{
	"nome":"tag3"
}

```


### para listar tags utilize a rota
```
GET -> /tags
```

### para deletar tags utilize a rota

```
DELETE-> /tags/id

ex: http://localhost:3333/tags/c38ef249-f04f-4d21-b798-a8aa777ebea1
```

### para atualizar tags utilize a rota
```
PATCH-> /tags/id

ex: http://localhost:3333/tags/c38ef249-f04f-4d21-b798-a8aa777ebea1

com alguma alteração no body 

{
	"nome":"gols"
}
```


### para importar csv de TAGS utilize a rota 

```POST -> /tags/import
  o arquivo deve ser passado como multipart/form-data

```
### para criar um card utilize a rota 

```POST -> /cards

com o body 
{
	"texto":"teste do teste",
	"tags":["tag1"]
}

```


### para listar cards utilize a rota
```
GET -> /cards
```

### para deletar um card utilize a rota

```
DELETE-> /cards/id

ex: http://localhost:3333/cards/c38ef249-f04f-4d21-b798-a8aa777ebea1
```

### para atualizar um card utilize a rota
```
PATCH-> /cards/id

ex: http://localhost:3333/cards/c38ef249-f04f-4d21-b798-a8aa777ebea1

com alguma alteração no body 

{
	"texto":"gols"
}
```


### para importar csv de CARDS utilize a rota 

```POST -> /cards/import
  o arquivo deve ser passado como multipart/form-data

```


### 2. CLI para importação dos card

No repositório está o código do CLI porém você já pode intalar a depêndencia encontrada no link

```https://www.npmjs.com/package/desafio-cli```

basta  executar 

```yarn global add desafio-cli```

para importar um arquivo de CARDS como no exemplo

```desafio-cli import:card </folder/CARDS.csv>```

CSV exemplo
```
Lorem ipsum dolor sit amet., tag1;tag2;tag3
Mauris fringilla non quam vel lacinia,tag3
Cras in tempus libero

```

para importar um arquivo de TAGS como no exemplo

```desafio-cli import:tag </folder/TAGS.csv>```

CSV exemplo
```
tag1,
tag2,
tag3

```

lembrando que a api deve estar exposta no endereço para o CLI realizar a importação 

``` http://localhost:3333```

### 3. Interface WEB

... loading
