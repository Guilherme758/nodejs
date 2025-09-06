const express = require("express")
const router = express.Router()
const validatePerfil = require('../middlewares/validatePerfil')


router.post('/perfil', validatePerfil, (req, res) => {
    const {nome, email, idade} = req.body

    const htmlReturn = `<h3>Sucesso no cadastro</h3>
                        <span>Nome: ${nome}</span><br>
                        <span>Email: ${email}</span><br>
                        <span>Idade: ${idade}</span>`

    res.status(200).send(htmlReturn)
})

module.exports = router