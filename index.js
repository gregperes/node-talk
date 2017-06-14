const express = require("express");
const bodyParser = require("body-parser");
const router = require("./config/router");

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.configureRoutes(app);

app.listen(port, function () {
    console.log("server started on port: " + port);
});