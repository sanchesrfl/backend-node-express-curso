const express = require("express");
const config = require("./config.js");
//app server
const server = express ();
//app parse json de resposta
server.use(express.json());

//app ouvindo na porta do config.js
server.listen(config.PORT, () => {
  console.log("Server Listening on PORT:", config.PORT);
});

//api endpoint
server.get("/status", (request, response) => {
   const status = {
      "Status": "Running"
   };
   
   response.send(status); //is now a function that takes the JSON object as the argument.
});