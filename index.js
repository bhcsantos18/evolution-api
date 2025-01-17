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
  const requestBody = req.body; // Captura o corpo da requisição

  // Resposta com os dados recebidos
  res.json({
    message: `POST: Mensagem enviada para a instância ${instanceName}`,
    receivedData: requestBody,
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});