const express = require('express'); // Importa o Express
const app = express(); // Cria a aplicação Express
const PORT = process.env.PORT || 3000; // Define a porta

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'Evolution API is running!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});