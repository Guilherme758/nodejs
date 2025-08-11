const readline = require('readline')
const math = require('./matematica')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function perguntar(){
    let primeiro;
    let segundo;
    rl.question("Digite o primeiro número: ", (p) => {
        primeiro = parseFloat(p)

        rl.question("Digite o segundo número: ", (s) => {
            segundo = parseFloat(s)
            
            rl.question("Qual operação deseja realizar? ", (resposta) => {
            resposta = resposta.toLowerCase().trim()
        
            if (resposta == "soma"){
                console.log(math.soma(primeiro, segundo))
            }
            else if (resposta == "subtracao"){
                console.log(math.subtracao(primeiro, segundo))
            }
            else if (resposta == "multiplicacao"){
                console.log(math.multiplicacao(primeiro, segundo))
            }
            else if (resposta == "divisao"){
                console.log(math.divisao(primeiro, segundo))
            }
            else if (resposta == "sair"){
                console.log("Saindo...")
                rl.close()
                return
            }
            else{
                console.log("Opção inválida")
            }
            perguntar()
            })
        })
    })
}

perguntar()