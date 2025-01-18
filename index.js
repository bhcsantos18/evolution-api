const express = require('express');
const axios = require('axios'); // Para fazer requisições HTTP
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware para fazer o parse de JSON

// Rota para enviar uma lista via WhatsApp
app.post('/message/sendList/:instance', async (req, res) => {
    const instance = req.params.instance;  // Nome da instância
    const { number, title, description, buttonText, footerText, sections } = req.body;  // Dados recebidos na requisição

    // URL do endpoint da Evolution API (substitua com seu domínio real)
    const apiUrl = `https://sub.domain.com/message/sendList/${instance}`;

    try {
        const response = await axios.post(apiUrl, {
            number,
            title,
            description,
            buttonText,
            footerText,
            sections
        });

        res.status(200).json({
            message: 'Lista enviada com sucesso!',
            data: response.data
        });
    } catch (error) {
        console.error('Erro ao enviar lista:', error);
        res.status(500).json({
            message: 'Erro ao enviar lista',
            error: error.message
        });
    }
});

// Rota padrão
app.get('/', (req, res) => {
    res.send('Evolution API está funcionando!');
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
