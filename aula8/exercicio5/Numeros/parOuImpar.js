/*********************************************************************
 * Objetivo:  Criar um sistema que gerencie números pares e ímpares
 * Data: 20/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

const { Console } = require("console")

const gerenciadorParOuImpar = function (NumeroInicial, NumeroFinal, escolhaSoma) {
    let inicio = NumeroInicial
    let final = NumeroFinal
    let contador = inicio
    let quantidade = 0
    let escolha = escolhaSoma
    let status = false

    if (inicio < 0 || inicio > 500) {
        console.log('!ERRO! O valor inicial deve estar dentro do intervado de 0 e 500')
    }
    else if (final < 0 || inicio > 500) {
        console.log('!ERRO! O valor final deve estar dentro do intervado de 100 e 1000')
    }
    else if (inicio == '' || final == '') {
        console.log('!ERRO! É obrigatorio informar todos os valores.')
    }
    else if (isNaN(inicio) || isNaN(final)) {
        console.log('!ERRO! Não é possivel a entrada de dados em caracteres.')
    }
    else if (inicio > final) {
        console.log('!ERRO! O valor inicial não pode ser maior que o final')
    }
    else if (inicio == final) {
        console.log('!ERRO! os dois valores fornecidos não podem ser iguais')
    }
    else {
        inicio = Number(inicio)
        final = Number(final)
        contador = Number(contador)

        console.log('Lista de números >PARES<')
        while (inicio < final) {//par
            if (inicio / 2 == 0) {
                contador = inicio + 2
                console.log(contador)
                quantidade++
                inicio++
            }
            console.log(`Qtde de números pares encontrados: ${quantidade}\n`)
        }
        inicio = NumeroInicial
        while (inicio < final) {
            console.log('Lista de números >IMPARES<\n')
            quantidade = 0
            if (inicio / 2 == 1) {
                console.log(contador)
                contador = inicio + 2
                quantidade++
                inicio++
            }
            console.log(`Qtde de números impares encontrados: ${quantidade}\n`)
        }
        if (escolha == 'impar') {
            contador = contador + 1
            console.log(`A soma dos numeros Impares dessa sequencia é: ${contador}`)
        }
        else if (escolha == 'par') {
            contador = contador + 2
            console.log(`A soma dos numeros Pares dessa sequencia é: ${contador}`)
        }
        else {
            console.log(`A soma dos numeros Impares e Pares dessa sequencia é: ${contador}`)
        }
        status = true
    }
}

console.log(gerenciadorParOuImpar('2', '5', 'impar'))