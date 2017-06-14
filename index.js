const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (request, response) {
    response.send({ message: "Aqui vamos listar as tarefas" });
});

app.post("/", function (request, response) {
    response.send({ message: "aqui vamos incluir uma nova tarefa" });
});

app.put("/:id", function (request, response) {
    response.send({ message: "aqui vamos editar uma tarefa" });
});

app.delete("/:id", function (request, response) {
    response.send({ message: "aqui vamos deletar uma tarefa" });
});

app.listen(port, function () {
    console.log("server started on port: " + port);
});