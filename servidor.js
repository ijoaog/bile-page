const express = require('express');
const app = express();
const port = 4001;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});