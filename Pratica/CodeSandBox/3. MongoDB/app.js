const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const porta = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conectar ao MongoDB (substitua a URL pelo seu próprio URL do MongoDB)
mongoose.connect('mongodb+srv://sanchesrfl:qtPOqPHKukgVpc9x@cluster0.fsaeup2.mongodb.net/arroz?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro na conexão com o MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB');
});

// Definir um modelo de livro
const Livro = mongoose.model('Livro', {
  titulo: String,
});

// Listar todos os livros
app.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.find({});
    res.json(livros);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Obter um único livro por ID
app.get('/livros/:id', async (req, res) => {
  const idLivro = req.params.id;

  try {
    const livro = await Livro.findById(idLivro);

    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    res.json(livro);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Criar um novo livro
app.post('/livros', async (req, res) => {
  const { titulo } = req.body;

  try {
    const novoLivro = new Livro({ titulo });
    const livroSalvo = await novoLivro.save();
    res.status(201).json(livroSalvo);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Atualizar um livro por ID
app.put('/livros/:id', async (req, res) => {
  const idLivro = req.params.id;
  const tituloAtualizado = req.body.titulo;

  try {
    const livro = await Livro.findById(idLivro);

    if (!livro) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    livro.titulo = tituloAtualizado;
    const livroAtualizado = await livro.save();

    res.json(livroAtualizado);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// Excluir um livro por ID
app.delete('/livros/:id', async (req, res) => {
  const idLivro = req.params.id;

  try {
    const resultado = await Livro.deleteOne({ _id: idLivro });

    if (resultado.deletedCount === 0) {
      return res.status(404).json({ erro: 'Livro não encontrado' });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

app.listen(porta, () => {
  console.log(`O servidor está ouvindo na porta ${porta}`);
});
