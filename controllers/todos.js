const Todo = require("../models/todo.js");

// MAIS UM POUCO DE ECMA6
class TodosController {
    index(request, response) {
        Todo.find(function (err, todos) {
            if (err) {
                response.status(500)
                    .send({ error: err })
                    .end();
            }

            response.status(200)
                .send({ todos: todos });
        });
    }

    create(request, response) {
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
    }

    update(request, response) {
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
    }

    delete(request, response) {
        Todo.remove({ _id: request.params.id }, function (err) {
            if (err) {
                response.status(500)
                    .send({ error: err })
                    .end();
            }

            response.status(204)
                .end();
        });
    }
}

module.exports = new TodosController();