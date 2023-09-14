<p align="center" width="100%">
<h2> Tutorial MongoDB </h2>
</p>

___

1. Criar nova conta gratuita

___
<p align="center" width="100%">
    <img src="/.recursos/img/try.png" width="70%" height="70%" />
</p>

<p align="center" width="100%">
<img src="/.recursos/img/registro.png" width="70%" height="70%" />
</p>

___

2. Login e configuração inicial

___

<p align="center" width="100%">
<img src="/.recursos/img/login-mongo.png" width="70%" height="70%" />
</p>

- crie uma nova organização
<p align="center" width="100%">
<img src="/.recursos/img/nova-org-mongo.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/nova-org-mongo-2.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/criar-org-mongo.png" width="70%" height="70%" />
</p>

- crie um novo projeto
<p align="center" width="100%">
<img src="/.recursos/img/novo-projeto-mongo.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/nomear-projeto-mongo.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/criar-projeto-mongo.png" width="70%" height="70%" />
</p>

- crie uma nova base de dados (cluster)
<p align="center" width="100%">
<img src="/.recursos/img/criar-cluster-mongo.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/criar-cluster-mongo-2.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/criar-cluster-mongo-3.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/criar-cluster-mongo-4.png" width="70%" height="70%" />
</p>

obs.: se o seu ip ainda não estiver o ip listado, execute: 
<p align="center" width="100%">
<img src="/.recursos/img/criar-cluster-mongo-5.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/criar-cluster-mongo-6.png" width="70%" height="70%" />
</p>

___

3. Conectar ao mongo DB
___

<p align="center" width="100%">
<img src="/.recursos/img/conectar-db-mongo.png" width="70%" height="70%" />
</p>
<p align="center" width="100%">
<img src="/.recursos/img/conectar-db-mongo-2.png" width="70%" height="70%" />
</p>

- copie e salve a string de conexão
<p align="center" width="100%">
<img src="/.recursos/img/conectar-db-mongo-3.png" width="70%" height="70%" />
</p>

___

4. Insira sua string de conexão copiada no passo anterior na REST API
___


- abra o arquivo 3.MongoDB/app.js

    - insira a string como valor da variável uri
    <p align="center" width="100%">
    <img src="/.recursos/img/uri-mongo-node.png" width="70%" height="70%" />
    </p>
    << obs.: perceba que sua string de conexão deverá conter os valores de 1 a 5 nas {chaves} preenchidos com os do seu projeto no mongo!. >>