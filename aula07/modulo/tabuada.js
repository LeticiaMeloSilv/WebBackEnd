/*********************************************************************
 * Objetivo: Gerar o calculo de uma tabuada
 * Data: 06/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

const gerarTabuada = function (valorTabuada, valorInicial, valorFinal) {
    let tabuada = valorTabuada
    let inicio = valorInicial
    let final = valorFinal

    let resultado
    let status = false

    if (tabuada == '' || inicio == '' || final == '') {
        console.log('!ERRO! É obrigatorio informar todos os valores.')
    }
    else if (isNaN(tabuada) || isNaN(inicio) || isNaN(final)) {
        console.log('!ERRO! Não é possivel a entrada de dados em caracteres.')
    }
    else {
        tabuada = Number(tabuada)
        inicio = Number(inicio)
        final = Number(final)

        if (inicio > final) {
            inicio = valorFinal
            final = valorInicial
        }
        while (inicio <= final) {
            resultado = tabuada * inicio
            console.log(`${tabuada} x ${inicio} = ${resultado}`)
            status=true
            inicio++
        }
    }
    return status
}

/*********************************************************************
 * Objetivo: Gerar o calculo de uma tabuada
 * Data: 06/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

function gerarTabuada(valorTabuada, valorInicial, valorFinal) {
    let tabuada = valorTabuada
    let inicio = valorInicial
    let final = valorFinal

    let resultado
    let status = false

    if (tabuada == '' || inicio == '' || final == '') {
        console.log('!ERRO! É obrigatorio informar todos os valores.')
    }
    else if (isNaN(tabuada) || isNaN(inicio) || isNaN(final)) {
        console.log('!ERRO! Não é possivel a entrada de dados em caracteres.')
    }
    else {
        tabuada = Number(tabuada)
        inicio = Number(inicio)
        final = Number(final)

        if (inicio > final) {
            inicio = valorFinal
            final = valorInicial
        }
        while (inicio <= final) {
            resultado = tabuada * inicio
            console.log(`${tabuada} x ${inicio} = ${resultado}`)
            status = true
            inicio++
        }
    }
    return status
}

module.exports={
    gerarTabuada
}
