const express = require('express'); // Importa o Express
const app = express(); // Cria a aplicação Express
const PORT = process.env.PORT || 3000; // Define a porta

// Defina um nome para a instância
const instanceName = 'evolution-instance'; // Você pode mudar isso para o nome que preferir

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'Evolution API is running!' });
});

// Rota para enviar botões, incluindo o nome da instância na URL
app.get('/message/sendButtons/:instance', (req, res) => {
  const instanceNameFromURL = req.params.instance || instanceName; // Pega o nome da instância da URL
  res.json({ message: `Mensagem enviada para a instância ${instanceNameFromURL}` });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});