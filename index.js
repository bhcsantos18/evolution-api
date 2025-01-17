// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Rota básica para testar a API
app.get('/', (req, res) => {
  res.json({ message: 'Evolution API is running!' });
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
