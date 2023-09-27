/*********************************************************************
 * Objetivo:  Criar um sistema que gerencie números pares e ímpares
 * Data: 20/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

const { Console } = require("console")

const gerenciadorParOuImpar=function(NumeroInicial, NumeroFinal, escolhaSoma){
    let inicio=NumeroInicial
    let final=NumeroFinal
    let contadorImpar=0
    let contadorPar=0
    let quantidade=0
    let escolha=escolhaSoma
    let status=false
    let contador

    if(inicio<0||inicio>500){
        console.log('!ERRO! O valor inicial deve estar dentro do intervado de 0 e 500')
    }
    else if(final<100||final>1000){
        console.log('!ERRO! O valor final deve estar dentro do intervado de 100 e 1000')
    }
    else if (inicio == ''|| final=='') {
        console.log('!ERRO! É obrigatorio informar todos os valores.')
    }
    else if (isNaN(inicio)|| isNaN(final)) {
        console.log('!ERRO! Não é possivel a entrada de dados em caracteres.')
    }
    else if(inicio>final){
        console.log('!ERRO! O valor inicial não pode ser maior que o final')
    }
    else if(inicio==final){
        console.log('!ERRO! os dois valores fornecidos não podem ser iguais')
    }
    else{
        inicio=Number(inicio)
        final=Number(final)

        console.log('Lista de números >PARES<\n')
        for(let i = inicio; i <= final; i++){
            if(i % 2 === 0){
                console.log(i)
                quantidade++
                contadorPar=contadorPar+inicio*1
            }
        }
        console.log(`Qtde de números pares encontrados: ${quantidade}\n`)
        quantidade=0
        inicio=NumeroInicial
        console.log('Lista de números >IMPARES<\n')
        for(let i = inicio; i <= final; i++){
            if(i % 2 === 1){
                console.log(i)
                quantidade++
                contadorImpar=contadorImpar+inicio*1
            }
        }
        console.log(`Qtde de números impares encontrados: ${quantidade}\n`)

        contador=contadorPar+contadorImpar
        if(escolha=='impar'){
            contador=contador+1
            console.log(`A soma dos numeros Impares dessa sequencia é: ${contadorImpar}`)
        }
        else if(escolha=='par'){
            contador=contador+2
            console.log(`A soma dos numeros Pares dessa sequencia é: ${contadorPar}`)
        }
        else{
            console.log(`A soma dos numeros Impares e Pares dessa sequencia é: ${contador}`)
        }
    }
status=true
}

console.log(gerenciadorParOuImpar('10','150','impar'))