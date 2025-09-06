const validatePerfil = (req, res, next) => {
    const {nome, email, idade} = req.body

    let errorsReturn = ""

    if(nome.trim() === ""){
        errorsReturn += "<span>Nome não pode ser vazio</span><br>"
    }
    if(email.trim() === ""){
        errorsReturn += "<span>Email não pode ser vazio</span><br>"
    }
    if(!email.includes("@")){
        errorsReturn += "<span>Email deve conter @</span><br>"
    }
    if(!Number.isInteger(parseInt(idade))){
        errorsReturn += "<span>Idade deve ser um número inteiro</span><br>"
    }
    if(parseInt(idade) < 0){
        errorsReturn += "<span>Idade deve ser um número positivo</span><br>"
    }

    if(errorsReturn === ""){
        next()
    }
    else{
        return res.status(400).send(errorsReturn)
    }
}

module.exports = validatePerfil