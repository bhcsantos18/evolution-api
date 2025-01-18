const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/message/sendList/:instance', async (req, res) => {
    const instance = req.params.instance;
    const { number, title, description, buttonText, footerText, sections } = req.body;

    // Use a URL correta do seu projeto Vercel
    const apiUrl = `https://evolution-api-orpin.vercel.app/message/sendList/${instance}`;

    try {
        console.log('Enviando requisição para:', apiUrl); // Log do URL
        const response = await axios.post(apiUrl, {
            number,
            title,
            description,
            buttonText,
            footerText,
            sections
        });

        console.log('Resposta recebida:', response.data); // Log da resposta
        res.status(200).json({
            message: 'Lista enviada com sucesso!',
            data: response.data
        });
    } catch (error) {
        console.error('Erro ao enviar lista:', error); // Log do erro
        res.status(500).json({
            message: 'Erro ao enviar lista',
            error: error.message
        });
    }
});

app.get('/', (req, res) => {
    res.send('Evolution API está funcionando!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
