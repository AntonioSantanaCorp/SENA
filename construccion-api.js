const express = require('express')
const app = express()

app.use(express.json());

const USUARIOS = []
app.get('/', (req, res) => { 
    res.send('Hola')
})

app.post('/signin', (req, res) => {
    const { usuario, contra } = req.body || {}

    if (usuario === undefined || contra === undefined)
        return res.status(400).send('falta usuario o contraseña');

    USUARIOS.push({ usuario, contra });

    res.send('Usuario creado');
});

app.post('/login', (req, res) => {
    const { usuario, contra } = req.body || {}

    if (usuario === undefined || contra === undefined)
        return res.status(400).send('falta usuario o contraseña');

    if (USUARIOS.some(u => u.usuario === usuario && u.contra === contra))
        return res.send('Usuario logeado')
    else
        return res.status(400).send('el usuario no se encuentra registrado')
})

const server = app.listen(3200, () => {
    console.log(`La api se ejecuta: http://localhost:${server.address().port}`)
})