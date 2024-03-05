const express = require('express');
const app = express();
const port = 3050; // Escolha a porta desejada, por exemplo, 3000

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});