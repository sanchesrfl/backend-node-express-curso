const mongoose = require('./db');

const filmeSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  ano_publicacao: Number,
  genero: String,
  classificacao: Number,
});

const Filme = mongoose.model('Filme', filmeSchema);

module.exports = Filme;
