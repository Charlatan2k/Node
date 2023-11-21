const express = require("express");

const app = express();

app.get("/", (request, response) => {
  console.log("Peticion recibida del cliente");
  console.log("Url: " + request.url);
  console.log("Metodo: " + request.method);
  console.log("User-Agent: " + request.headers["user-agent"]);
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify({ ok: true, message: "Recibido" }));
});

app.get("/bye", (request, response) => {
  response.status(200).json({ ok: true, message: "Adios" });
});
app.listen(3000);
