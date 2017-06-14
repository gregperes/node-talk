var todosController = require("../controllers/todos.js");

// UM POUCO DE ECMA6
class Router {
    configureRoutes(app) {
        app.get("/", todosController.index);
        app.post("/", todosController.create);
        app.put("/:id", todosController.update);
        app.delete("/:id", todosController.delete);
    }
}

module.exports = new Router();