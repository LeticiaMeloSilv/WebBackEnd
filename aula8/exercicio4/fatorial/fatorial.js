/*********************************************************************
 * Objetivo: Calcular o Fatorial de um número fornecido pelo usuário
 * Data: 20/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

const { Console } = require("console")

const geradorFatorial=function(Numero){
    let fatorial=Numero
    let status=false
    let resultado=fatorial

    if (fatorial == '') {
        console.log('!ERRO! É obrigatorio informar todos os valores.')
    }
    else if (isNaN(fatorial)) {
        console.log('!ERRO! Não é possivel a entrada de dados em caracteres.')
    }
    else if(fatorial=='1'){
        console.log('!ERRO! Não é possível calcular o fatorial, insira um valor maior do que 1.')
    }
    else if(fatorial=='1'){
        console.log('!ERRO! Não existe fatorial de 0, insira um valor valido')
    }
    else{
        fatorial=Number(fatorial)
        while(fatorial>1){
            resultado=resultado*(fatorial-1)
            fatorial--
        }
        console.log(`O fatorial de ${Numero} é igual a ${resultado}`)
        status=true
    }
    return status
}

console.log(geradorFatorial('5'))
