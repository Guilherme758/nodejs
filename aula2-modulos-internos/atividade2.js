/*
    Criar um sistema interativo que permita cadastrar URLs,
    listar, salvar e excluir em um arquivo JSON, usando os
    módulos fs, events, os, path, url e readline.
*/

const fs = require('fs')
const EventEmitter = require('events')
const os = require('os')
const path = require('path')
const url = require('url')
const readline = require('readline')

const events = new EventEmitter()
const rl = readline.createInterface(
    input = process.stdin,
    output = process.stdout
)

function actions(){
    rl.question("O que deseja fazer? 1 para cadastro, 2 para visualizar, 3 para excluir: ", (res) => {
        if(res == "1"){

        }
        else if(res == "2"){

        }
        else if(res == "3"){

        }
        else if(res == "sair"){
            rl.close()
            return
        }
        else{
            console.log("Opção inválida, tente novamente")
            actions()
        }
    })
}

const filePath = path.join(__dirname, 'files/urls.json')

if(!fs.existsSync(filePath)){
    fs.writeFileSync(filePath, JSON.stringify([
        {
            "url": "https://google.com.br"
        }
    ]))
}

actions()