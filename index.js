const express = require('express'); // Importa o Express
const app = express(); // Cria a aplicação Express
const PORT = process.env.PORT || 3000; // Define a porta

// Middleware para lidar com JSON no corpo da requisição
app.use(express.json());

// Rota de teste (GET)
app.get('/', (req, res) => {
  res.json({ message: 'Evolution API is running!' });
});

// Rota para enviar botões (GET)
app.get('/message/sendButtons/:instance', (req, res) => {
  const instanceName = req.params.instance;
  res.json({ message: `GET: Mensagem enviada para a instância ${instanceName}` });
});

// Rota para enviar botões (POST)
app.post('/message/sendButtons/:instance', (req, res) => {
  const instanceName = req.params.instance;
  const { number, title, description, footer, buttons } = req.body;

  // Valida se todos os campos necessários estão presentes
  if (!number || !title || !description || !footer || !buttons) {
    return res.status(400).json({ error: 'Todos os campos (number, title, description, footer, buttons) são obrigatórios.' });
  }

  // Retorna uma resposta formatada
  res.json({
    instance: instanceName,
    message: `Botões enviados para a instância ${instanceName}`,
    data: {
      number,
      title,
      description,
      footer,
      buttons,
    },
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});