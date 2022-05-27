const express = require('express');
const app = express();

const PORT  = process.env.PORT || 8877;

app.get('/putinhas', (req, res) => {
    res.json({
        nome: 'Herby Henrique Castro',
        tipo: 'cracuda',
        valor: '1 big big chupado',        
    })
})

app.get('/about', (req, res) => {
    res.json({
        name: 'Paulo',
        email: 'pcardoso@ceijoaopauloii.org.br',
        urls: [
            {
                type: 'github',
                url: `https://github.com/Paulo-Santos20`
            },          
            
        ]
    })
})


app.get('/', (req, res) => {
    res.json({
        msg: 'Baby, seja Bem vinda ao nosso site'
    })
})

app.listen(PORT, () => {
    console.log('Escutando na porta: ' + PORT);
})