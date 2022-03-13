
const express = require("express");
const app = express();
const port = 8000;

// Middelewares.
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.send("Hola")
// });

app.post('/bienvenido', (req, res) => {
    console.log(req.body);
    res.send("Enviado...");
});

app.listen(port, () => {
    console.log("Cohete");
});

