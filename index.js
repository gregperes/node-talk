const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/node-todo");

var Schema = mongoose.Schema;

var TodoSchema = new Schema({
  description : String,
  completed   : Boolean,
  created_at  : Date
});

mongoose.model("Todo", TodoSchema);

var Todo = mongoose.model("Todo"); 

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (request, response) {
    Todo.find(function (err, todos) {
        if (err) {
            response.status(500)
                .send({ error: err })
                .end();
        }

        response.status(200)
            .send({ todos: todos });
    });
});

app.post("/", function (request, response) {
    var todo = new Todo({
        description: request.body.description,
        completed: false,
        created_at: new Date()
    });

    todo.save(function (err) {
        if (err) {
            response.status(500)
                .send({ error: err })
                .end();
        }

        response.status(201)
            .send({ todo: todo });
    });
});

app.put("/:id", function (request, response) {
    Todo.findById(request.params.id, function (err, todo) {
        if (err) {
            response.status(500)
                .send({ error: err })
                .end();
        }

        todo.description = request.body.description;
        todo.completed = requet.body.completed;

        todo.save(function (err) {
            if (err) {
                response.status(500)
                    .send({ error: err })
                    .end();
            }
        });

        response.status(200)
            .send({ todo: todo });
    });
});

app.delete("/:id", function (request, response) {
    Todo.remove({ _id: request.params.id }, function (err) {
        if (err) {
            response.status(500)
                .send({ error: err })
                .end();
        }

        response.status(204)
            .end();
    });
});

app.listen(port, function () {
    console.log("server started on port: " + port);
});