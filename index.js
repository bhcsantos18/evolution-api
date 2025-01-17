const express = require('express'); // Importa o Express
const app = express(); // Cria a aplicação Express
const PORT = process.env.PORT || 3000; // Define a porta

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'Evolution API is running!' });
});

// Rota para enviar botões, incluindo o nome da instância na URL
app.get('/message/sendButtons/:instance', (req, res) => {
  const instanceName = req.params.instance; // Pega o nome da instância da URL
  // Retorna uma mensagem com o nome da instância
  res.json({ message: `Mensagem enviada para a instância ${instanceName}` });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});