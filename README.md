### <img src="https://github.com/corabank/frontend-case/blob/16051123b026faaba02e6d0959fe471a6a6dac2a/src/assets/logo.svg" alt="Cora" title="Cora" width="50" />
### Frontend Teste
Teste para vagas de frontend da [Cora](https://www.cora.com.br) :heartbeat:
<br />

# Quick Menu

- [Hey There](#hey-there-wave)
- [Como começar](#como-começar)
- [Contratos com APIs](#contratos-com-apis)
  - [Auth](#auth)
  - [Transaction](#transaction)
- [License](#license)

# Hey There :wave:

Me chamo Mayara Manso e esse é o meu projeto do [teste de front da cora](https://github.com/corabank/frontend-case) 

# Como começar?

1. Faça o **clone** do projeto

2. Instale as dependências 

3. Inicie o projeto com o comando:

    ```bash
    npm run dev
    ```

    **Info**: Esse comando vai rodar o client. O client possivelmente vai rodar na porta `5173` (o proprio `vite` que faz essa escolha, então fique atento ao seu terminal)
4. Iniciar o servidor
   - Na pasta `/api`
     - Instale as dependências
     - Inicie a aplicação
    
    ```bash
    npm run dev
    ```
    **Info**: Esse comando vai rodar o service. O service roda na porta 5003
    

# Contratos com APIs.

## Auth

cURL:
```bash
curl --location 'http://localhost:5003/api/login' \
--header 'Content-Type: application/json' \
--data '{
    "login": "35819357833",
    "password": "123456"
}'
```

**Info**: O `login` e `password` são fixos, ou seja, são exatamente os mesmos que estão no **cURL** :)

Response:
```json
{
  "token": "$TOKEN"
}
```

## Transaction

cURL:
```bash
curl --location 'http://localhost:5003/api/transactions/bank-balance' \
--header 'Authorization: $TOKEN
```

Response Interface:
```ts
interface IResponseList {
  results: {
    items: {
      "id": string
      "description": string
      "label": string
      "entry": "DEBIT" | "CREDIT"
      "amount": number //in cents
      "name": string
      "dateEvent": string
      "status": string
    }[]
    date: string;
    dayAmount: {
      CREDIT: number;
      DEBIT: number
    };
    dayBalance: number;
  }[]
  itemsTotal: number;
  initialBankBalance: number;
}
```

# License

MIT © [corabank](https://github.com/corabank)
