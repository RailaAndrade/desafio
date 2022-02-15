## Desafio

### 1. Interace HTTP REST API

Para executar a API abra a pasta desafio-api 


 Não se esqueça de rodar o comando

```yarn install```

Utilize o Docker para carregar e depois disponibilizar todos os serviços necessários ao funcionamento do Siga-Doc:

```docker-compose up```

**Instalação de dependências**





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
