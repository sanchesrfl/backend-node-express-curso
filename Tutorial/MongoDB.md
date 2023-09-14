### Tutorial MongoDB
1. Criar nova conta gratuita

<img src="/.recursos/img/try.png" width="70%" height="70%" />

<img src="/.recursos/img/registro.png" width="70%" height="70%" />

2. Login e configuração inicial
 
<img src="/.recursos/img/login-mongo.png" width="70%" height="70%" />

- crie uma nova organização

<img src="/.recursos/img/nova-org-mongo.png" width="70%" height="70%" />

<img src="/.recursos/img/novo-org-mongo-2.png" width="70%" height="70%" />

<img src="/.recursos/img/criar-org-mongo-2.png" width="70%" height="70%" />

- crie um novo projeto

<img src="/.recursos/img/novo-projeto-mongo.png" width="70%" height="70%" />

<img src="/.recursos/img/nomear-projeto-mongo.png" width="70%" height="70%" />

<img src="/.recursos/img/criar-projeto-mongo.png" width="70%" height="70%" />

- crie uma nova base de dados (cluster)

<img src="/.recursos/img/criar-cluster-mongo.png" width="70%" height="70%" />

<img src="/.recursos/img/criar-cluster-mongo-2.png" width="70%" height="70%" />

<img src="/.recursos/img/criar-cluster-mongo-3.png" width="70%" height="70%" />

<img src="/.recursos/img/criar-cluster-mongo-4.png" width="70%" height="70%" />

obs.: se o seu ip ainda não estiver o ip listado, execute: 

<img src="/.recursos/img/criar-cluster-mongo-5.png" width="70%" height="70%" />

<img src="/.recursos/img/criar-cluster-mongo-6.png" width="70%" height="70%" />

3. Conectar ao mongo DB

<img src="/.recursos/img/conectar-db-mongo.png" width="70%" height="70%" />

<img src="/.recursos/img/conectar-db-mongo-2.png" width="70%" height="70%" />

- copie e salve a string de conexão

<img src="/.recursos/img/conectar-db-mongo-3.png" width="70%" height="70%" />

4. Insira sua string de conexão copiada no passo anterior na REST API

- abra o arquivo 3.MongoDB/app.js

    - insira a string como valor da variável uri
    
    <img src="/.recursos/img/uri-mongo-node.png" width="70%" height="70%" />

    << obs.: perceba que sua string de conexão deverá conter os valores de 1 a 5 nas {chaves} preenchidos com os do seu projeto no mongo!. >>