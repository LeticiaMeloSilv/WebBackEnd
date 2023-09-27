/*********************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 20/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

const { Console } = require("console")

const gerenciador=function(valorTabuadaInicial, valorTabuadaFinal,valorInicial, valorFinal) {
    let tabuadaInicial = valorTabuadaInicial
    let tabuadaFinal = valorTabuadaFinal
    let inicio = valorInicial
    let final = valorFinal

    let resultado
    let status = false

    if (tabuadaInicial == '' || tabuadaFinal == '' || inicio == '' || final == '') {
        console.log('!ERRO! É obrigatorio informar todos os valores.')
    }
    else if (isNaN(tabuadaInicial)|| isNaN(tabuadaFinal) || isNaN(inicio) || isNaN(final)) {
        console.log('!ERRO! Não é possivel a entrada de dados em caracteres.')
    }
    else {
        tabuadaInicial = Number(tabuadaInicial)
        tabuadaFinal = Number(tabuadaFinal)
        inicio = Number(inicio)
        final = Number(final)

        if (inicio > final) {
            inicio = valorFinal
            final = valorInicial
        }
        console.log(`Tabuada do [${tabuadaInicial}]\n`)
        while (inicio <= final) {
            resultado = tabuadaInicial * inicio
            console.log(`${tabuadaInicial} x ${inicio} = ${resultado}`)
            status=true
            inicio++
        }
        console.log(`\nTabuada do [${tabuadaFinal}]\n`)
        inicio=valorInicial
        while (inicio <= final) {
            resultado = tabuadaFinal * inicio
            console.log(`${tabuadaFinal} x ${inicio} = ${resultado}`)
            status=true
            inicio++
        }
    }
    return status
}
console.log(gerenciador('2','3','0','2'))