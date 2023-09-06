/*********************************************************************
 * Objetivo: realizar uma calculadora que identifica a operação definida pelo  usuario,
 * que não permita valores vazios, letras e divisao por 0, tratando a virgula e as casas decimais
 * Data: 23/08/2023
 * Nome: Letícia
 * Versão: 2.0
 *********************************************************************/

var calculosMatematicos=require('./modulo/calculosMatematicos')

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Valor 01: ', function (valor01) {
    let valor1 = valor01.replace(',', '.')

    entradaDeDados.question('Valor 02: ', function (valor02) {
        let valor2 = valor02.replace(',', '.')
        valor1 = Number(valor1)
        valor2 = Number(valor2)

        entradaDeDados.question('Opcões de operação: \n  1-Soma\n  2-Subtração\n  3-Multiplicação\n  4-Divisão\n-->', function (operacao) {
            let sinal = operacao
            if (sinal == 1) {
                let resultado = valor1 + valor2
                var ope = '+'
            }
            else if (sinal == 2) {
                let resultado = valor1 - valor2
                var ope = '-'
            }
            else if (sinal == 3) {
                let resultado = valor1 * valor2
                var ope = '*'
            }
            else if (sinal == 4) {
                let resultado = valor1 / valor2
                var ope = '/'
            }
            if (sinal == 4 && valor2 == 0) {
                console.log('!ERRO! Não existe divisão por 0')
            }
            else if (valor1 == '' || valor2 == '' || sinal == '') {
                console.log('!ERRO! Todos os dados devem ser preenchidos')
            }
            else if (isNaN(valor1) || isNaN(valor2) || isNaN(sinal)) {
                console.log('!ERRO! Confira se os valores inseridos são numeros')
            }
            else {
                resultado= calculosMatematicos.calculadora(valor1, valor2, sinal)
                console.log(valor1 + ' ' + ope + ' ' + valor2 + ' = ' + resultado.replace('.', ','))
            }
            entradaDeDados.close()

            //toUpperCase()--> tipo o ignoreCase do java
            //resultado =! undefined
            /*
            ctrl + ;(comentar)

            switch (sinal) {
             case '1':
                resultado=valor1+valor2
                 break;
             case '2':
                resultado=valor1-valor2
                 break;                 
             case '3':
                resultado=valor1*valor2
                 break;
             case '4':
                 if(valor2==0){
                     console.log('!ERRO!')
                    }
                    else{
                        resultado=valor1/valor2                        
                }
                 break;            
             default:
                console.log('!ERRO!')
                 break;
                }
                */                
        })
    })
})

