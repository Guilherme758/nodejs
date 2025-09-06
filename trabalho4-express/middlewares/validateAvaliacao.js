
const validateAvaliacao = (req, res, next) => {
    const {nota} = req.body

    let errorsReturn = ""

    if(isNaN(parseFloat(nota))){
        errorsReturn += "<span>Nota deve ser um valor numérico</span><br>"
    }
    if(parseFloat(nota) < 0 || parseFloat(nota) > 100){
        errorsReturn += "<span>Nota deve estar no intervalo de 0 a 100</span>"
    }

    if(errorsReturn == ""){
        next()
    }
    else{
        res.status(400).send(errorsReturn)
    }
}

module.exports = validateAvaliacao