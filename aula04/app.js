/*********************************************************************
 * Objetivo: realizar uma calculadora que identifica a operação definida pelo  usuario,
 * que não permita valores vazios, letras e divisao por 0, tratando a virgula e as casas decimais
 * Data: 16/08/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

entradaDeDados.question('Valor 01: ', function (valor01) {
    var valor1 = valor01.replace(',', '.')

    entradaDeDados.question('Valor 02: ', function (valor02) {
        var valor2 = valor02.replace(',', '.')

        entradaDeDados.question('Opcões de operação: \n  1-Soma\n  2-Subtração\n  3-Multiplicação\n  4-Divisão\n-->', function (operacao) {
            var sinal = operacao
            if (sinal == 1) {
                var resultado = Number(valor1) + Number(valor2)
                var ope='+'
            }
            else if (sinal == 2) {
                var resultado = Number(valor1) - Number(valor2)
                var ope='-'
            }
            else if (sinal == 3) {
                var resultado = Number(valor1) * Number(valor2)
                var ope='*'
            }
            else if (sinal == 4) {
                var resultado = Number(valor1) / Number(valor2)
                var ope='/'
            }
            if (valor1 == '' || valor2 == '' || sinal == '') {
                console.log('!ERRO! Todos os dados devem ser preenchidos')
            }
            else if (sinal == 4 && valor2 == 0) {
                console.log('!ERRO! Não existe divisão por 0')
            }
            else if(isNaN(valor1)|| isNaN(valor2) || isNaN(sinal)){
                console.log('!ERRO! Confira se os valores inseridos são numeros')
            }
            else {
                console.log(valor1 + ' '+ ope + ' ' + valor2 + ' = ' +  resultado.toFixed(2).replace('.', ','))
            }
            entradaDeDados.close()
        })
    })
})
 