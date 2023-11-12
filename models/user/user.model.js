const mongoose = require("mongoose");

const usuario = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  nascimento: {
    type: Date,
    required: true,
  },
});

const Usuario = mongoose.model("Usuario", usuario);

module.exports = Usuario;
