### Tutorial MongoDB :: Criar base de dados via Console

<img src="/.recursos/img/add-dados-mongo.png" width="70%" height="70%" />
<img src="/.recursos/img/add-dados-mongo-2.png" width="70%" height="70%" />
<img src="/.recursos/img/add-dados-mongo-3.png" width="70%" height="70%" />
<img src="/.recursos/img/add-dados-mongo-4.png" width="70%" height="70%" />
<img src="/.recursos/img/add-dados-mongo-5.png" width="70%" height="70%" />

[Amostra de Dados para a coleção filmes no MongoDB](/.recursos/dados/filmes.json)

___


### Query básica

- Buscar informação por ID

```
{ _id: ObjectId("6502a064f158bb17a99b3884") }

```

<img src="/.recursos/img/query-1.png" width="70%" height="70%" />

___


- Buscar informação por título

```
{  título: "A Paixão de Cristo" }

```

<img src="/.recursos/img/query-2.png" width="70%" height="70%" />


- Buscar mais de um valor combinado por categoria:

```

{ gênero: { $all: ["Drama", "Romance"] } }


```

<img src="/.recursos/img/query-3.png" width="70%" height="70%" />


- Buscar classificações igual ou maior que X valor

```
{ classificação: { $gte: 7.0 } }

```

<img src="/.recursos/img/query-4.png" width="70%" height="70%" />


- Buscar classificações por intervalo entre X e Y

```
{ classificação: { $gte: 6.0, $lt: 7.0 } }

```

<img src="/.recursos/img/query-5.png" width="70%" height="70%" />