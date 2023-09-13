const gerarIMC = function (pesoKg, alturaM) {
    let peso = pesoKg
    let altura = alturaM

    let resultado
    let status = false

    if (peso == '' || altura == '') {
        console.log('!ERRO! É obrigatorio informar todos os valores.')
    }
    else if (isNaN(peso) || isNaN(altura)) {
        console.log('!ERRO! Não é possivel a entrada de dados em caracteres.')
    }
    else {
        peso = Number(peso)
        altura = Number(altura)

        resultado = peso / (altura * altura)
        console.log(`${peso} / ${altura}² = ${resultado.toFixed(2)}`)

        if (resultado < 18.5) {
            console.log('Abaixo do peso')
        }
        else if (resultado > 18.5 && resultado < 24.9) {
            console.log('Peso normal')
        }
        else if (resultado > 25 && resultado < 29.9) {
            console.log('Acima do peso(sobrepeso)')
        }
        else if (resultado > 30 && resultado < 34.9) {
            console.log('Obesidade 1')
        }
        else if (resultado > 35 && resultado < 39.9) {
            console.log('Obesidade 2')
        }
        else if (resultado > 40) {
            console.log('Obesidade 3')
        }
        status = true
    }
    return status
}
console.log(gerarIMC('50', '1.64'))

