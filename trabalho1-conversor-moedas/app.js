const readline = require('readline')
const conversor = require('./conversor')
const mensagens = require('./mensagens')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function app(){
    rl.question(mensagens.digiteValor(), (val) =>{
        rl.question(mensagens.converter(), (res) => {
            let valor
            let moeda = res.toUpperCase().trim()

            if(moeda == "USD"){
                valor = conversor.converteParaDolar(val)
            }
            else if(moeda == "EUR"){
                valor = conversor.converteParaEuro(val)
            }
            else{
                console.log("Opção inválida. Encerrando...")
                rl.close()
                return
            }
            console.log(mensagens.resultado(val, valor, moeda))
        
            rl.question(mensagens.continuar(), (res) =>{
                if(res.toUpperCase().trim() == "SAIR"){
                    rl.close()
                    return
                }
                else{
                    app()
                }
            })
        })
    })
}

app()