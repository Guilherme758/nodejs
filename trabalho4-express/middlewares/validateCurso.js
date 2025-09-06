const validateCurso = (req, res, next) => {
    const nome = req.query.nome
    const periodo = req.query.periodo

    let errorsReturn = ""

    if(nome == undefined){
        errorsReturn += "<span>Parâmetro de nome do curso deve ser fornecido</span><br>"
    }
    if(periodo == undefined){
        errorsReturn += "<span>Parâmetro de período do curso deve ser fornecido</span>"
    }

    if(errorsReturn == ""){
        next()
    }
    else{
        res.status(400).send(errorsReturn)
    }
}

module.exports = validateCurso