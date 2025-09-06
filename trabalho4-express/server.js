const express = require("express")
const path = require("path")

const perfilRouter = require('./rotas/perfil')
const cursoRouter = require('./rotas/curso')
const avaliacaoRouter = require('./rotas/avaliacao')

const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname)))

app.use(express.urlencoded({extended: true}))

app.use(perfilRouter)
app.use(cursoRouter)
app.use(avaliacaoRouter)

app.use((req, res) => {
    res.status(404).send("Página não encontrada")
})

app.listen(PORT, () =>
    console.log("Servidor rodando")
)