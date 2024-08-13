const express = require('express');
const path = require('path');
const app = express();
const port = 4001;

app.use(express.static('public'));

app.get('/gramadaremos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'gramadaremos', 'index.html'));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
