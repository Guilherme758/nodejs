const express = require('express')
const router = express.Router()
const validateAvaliacao = require('../middlewares/validateAvaliacao')


router.post('/avaliar', validateAvaliacao, (req, res) => {
    const {nota} = req.body

    htmlReturn = ""

    if(parseFloat(nota) >= 60){
        htmlReturn = "<span>Aluno foi aprovado</span><br>"
    }
    else{
        htmlReturn = "<span>Aluno foi reprovado</span><br>"
    }

    htmlReturn += `<span>Nota: ${nota}</span>`

    res.status(200).send(htmlReturn)
})

module.exports = router