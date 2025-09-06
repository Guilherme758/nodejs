const express = require('express')
const router = express.Router()

const validateCurso = require('../middlewares/validateCurso')

router.get('/curso', validateCurso, (req, res) => {
    htmlReturn = `<h3>Detalhes do curso</h3>
                  <span>Curso: ${req.query.nome}</span><br>
                  <span>Período: ${req.query.periodo}</span>`
    
    res.status(200).send(htmlReturn)
})

module.exports = router