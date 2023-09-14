const express = require("express");
const config = require("./config.js");

//app server
const server = express ();

//app parse jsons formato de dados transações de estado REST
server.use(express.json());

//app ouvindo na porta do módulo config.js
server.listen(config.PORT, () => {
  console.log("Server Listening on PORT:", config.PORT);
});

//api endpoint para leitura do status do servidor
server.get("/status", (request, response) => {
   const status = {
      "Status": "Running"
   };
   
   response.send(status); //função que recebe o objeto json como argumento.
});