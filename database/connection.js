const mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_SENHA}@cluster0.4q5zj9w.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(console.log("Conectado com sucesso!"))
    .catch((error) => {
      console.log(`Erro: ${error}`);
    });
};

module.exports = connectDB;
