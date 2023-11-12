const express = require("express");
const router = express.Router();
const Usuario = require("../models/user/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { nome, email, senha, nascimento } = req.body;
  try {
    const usuarioExiste = await Usuario.findOne({ email });
    if (usuarioExiste) {
      res.status(400).json({ messsage: "O email já está sendo utilizado" });
    }

    const usuario = new Usuario({ nome, email, senha, nascimento });

    const salt = await bcrypt.genSalt(10);
    usuario.senha = await bcrypt.hash(senha, salt);

    await usuario.save();
    res.status(201).json({ message: "Usuário registrado com sucesso." });
  } catch (error) {
    res.status(500).json({ message: "Ocorreu um erro de registro" });
  }
});

router.post("/login", async (req, res) => {
  const { email, senha } = req.body;

  try {
    //Verificar se o usuário existe
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
    //Validar Senha
    const validacaoSenha = await bcrypt.compare(senha, usuario.senha);
    if (!validacaoSenha) {
      res.status(401).json({ message: "Senha Incorreta" });
    }

    //Geração de Token
    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        usuario: usuario._id,
      },
      secret,
      { expiresIn: "5m" }
    );

    //Confirmação de Login e exibição do token
    res.status(201).json({ message: "Usuário logado.", token });
  } catch (error) {
    res.status(500).json({ message: "Erro ao fazer login " });
    console.error("Erro ao fazer login:", error);
  }
});

module.exports = router;
