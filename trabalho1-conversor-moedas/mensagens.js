module.exports = {
    digiteValor(){
        return 'Digite o valor em reais: '
    },
    converter(){
        return 'Converter para (USD/EUR): '
    },
    resultado(valor_reais, valor_convertido, moeda){
        return `Resultado: R$${valor_reais} = $${valor_convertido} ${moeda}`
    },
    continuar(){
        return 'Digite sair caso queira encerrar ou aperte enter para continuar as conversões: '
    }
}