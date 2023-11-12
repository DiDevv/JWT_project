const jwt = require("jsonwebtoken");
const express = require("express");

const verificarAutenticacao = async (req, res, next) => {
  const autToken = req.headers.authorization;
  const secret = process.env.SECRET;

  if (!autToken) {
    res.status(401).json({ menssagem: "Não autorizado" });
  }

  //desestruturando os dados do autToken pois ele vem com um Barear e o que me interessa é apenas o token
  const token = autToken.split(" ")[1];

  try {
    jwt.verify(token, secret);
    next();
  } catch (error) {
    res.status(401).json({ menssagem: "Token Inválido" });
  }
};

module.exports = verificarAutenticacao;
