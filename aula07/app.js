var readline = require('readline')
var { gerarTabuada } = require('./modulo/tabuada')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

entradaDeDados.question('Tabuada desejada: ', function (valorTabuada) {
    let tabuada = valorTabuada
    entradaDeDados.question('Onde começa(primeiro valor): ', function (valorInicial) {
        let inicio = valorInicial
        entradaDeDados.question('Onde termina(ultimo valor): ', function (valorFinal) {
            let final = valorFinal
            console.log(tabuada.gerarTabuada(valorTabuada, valorInicial, valorFinal))
            entradaDeDados.close()
        })
    })
})