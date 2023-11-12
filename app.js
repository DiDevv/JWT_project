const express = require("express");
const connectDB = require("./database/connection");
const Usuario = require("./models/user/user.model");
const autRouter = require("./routers/autentication.router");
const verificarAutenticacao = require("./middleware/verificarAutenticacao");

const app = express();
const port = 5050;

app.use(express.json());
require("dotenv").config();
connectDB();

app.use("/authentication", autRouter);

app.get("/authentication/login", (req, res) => {});

app.get("/authentication/register", (req, res) => {});

app.get("/tasks", verificarAutenticacao, async (req, res) => {
  res.status(200).json({ message: "Rota funcionando!" });
});

app.get("/users", async (req, res) => {
  try {
    const usuario = await Usuario.find();
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um erro ao buscar os usuários." });
  }
});

app.listen(port, () => {
  console.log(`O servidor está rodando localmente na porta ${port}`);
});
