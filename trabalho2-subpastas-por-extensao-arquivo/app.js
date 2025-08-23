/*
    Criar um programa que organize arquivos de uma pasta
    em subpastas baseadas em suas extensões. O programa
    deve usar os módulos fs, path, os, url e events.
*/

const fs = require('fs')
const path = require('path')
const os = require('os')
const url = require('url')
const EventEmitter = require('events')
const readline = require('readline')

const events = new EventEmitter()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function organizarArquivos(pasta){
    fs.readdir(pasta, (err, files) => {
        let files_to_organize = {}

        files.forEach(file => {
            if(file == "app.js"){
                return
            }

            extension = path.extname(file).replace('.', '')
            
            if(extension == ''){
                return
            }

            if(!(extension in files_to_organize)){
                files_to_organize[extension] = []
            }

            files_to_organize[extension].push(file)
        })

        for(let extension in files_to_organize){
            let extension_folder = path.join(pasta, extension)
            
            if(!fs.existsSync(extension_folder)){
                fs.mkdirSync(extension_folder)
            }

            files_to_organize[extension].forEach(file => {
                let new_file_location = path.join(extension_folder, file)
                
                fs.watchFile(new_file_location, () => {
                    events.emit("moveFile", new_file_location)
                })

               fs.renameSync(path.join(pasta, file), new_file_location)
            })
        }
    })
}

function getUserFolder(){
    rl.question("Qual pasta deseja organizar? Caso deseje encerrar o programa, digite sair: ", (pasta) => {
        if(pasta.toLowerCase().trim() == "sair"){
            console.log("Encerrando...")
            rl.close()
            process.exit(0)
        }
        
        if(!fs.existsSync(pasta)){
            console.log("Pasta inválida, tente novamente.")
            getUserFolder()
        }
        else{
            organizarArquivos(pasta)
            getUserFolder()
        }
    })
}

events.on("moveFile", (filename) => {
    console.log(`Nome do arquivo: ${path.basename(filename)}`)
    console.log(`Nova localização: ${path.resolve(filename)}`)
    console.log(`Usuário atual: ${os.userInfo().username}`)
    console.log(`URL do novo arquivo: ${new url.URL('file://' + path.resolve(filename))}`)
    console.log()
})

getUserFolder()