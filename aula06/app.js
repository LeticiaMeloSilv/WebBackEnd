/*********************************************************************
 * Objetivo: elaborar um programa para auxiliar mo processo de vendas de uma loja, o programa deve solicitar o valor da venda e apresentar o valor atualizado conforme a tabe
 * Data: 30/08/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

var arquivo=require('./executavel/arquivo')

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Preço: ', function(precoProduto){
    let preco = precoProduto.replace(',', '.')
    entradaDeDados.question('Modo de pagamento:\n1-a vista\n2-a vista no cartão\n3-parcelado2x\n4-parcelado4x\nCodigo: ', function(pagamento){
        let codigo = pagamento
        resultado= arquivo.calculadora(codigo, preco)
        let total=preco-resultado
        console.log('Total: '+ String(total.toFixed(2)).replace('.', ','))
        entradaDeDados.close()
    })
})
