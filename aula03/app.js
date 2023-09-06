/******************************************************
 * Objetivo: realizar calculo da media escolar de um aluno
 * Data: 09/08/2023
 * Nome: Letícia
 * Versão: 1.0
 ****************************************************

 *parceInt() ->Converte pra numero inteiro
 *parceFloat() ->converte pra numero real
 *Number() -> converte o tipo de dado para numero(real ou inteiro)
 *String() -> converte o tipo do dado para string
 * shift+alt+f 
 * .close() ->sair do terminal travado
 * 
 * === verifica se o conteudo é igual e se o tipo de dado é igual
 * !== verifica a diferenca entre conteudos e a igualdade de tipo de dados
 * ==! verifica a igualdade entre conteudo e diferença do tipo de dados 
 * 
 * toFixed() -->serve pra definir a quantidade de casas mostradas depois da virgula(só serveem numero)
 * replace() --> serve pra trocar algum um caracter por outro(só serve em string)
 */

var readline = require('readline')
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

entradaDeDados.question('Nome do aluno: ', function (aluno) {
    var nome = aluno

    entradaDeDados.question('Curso: ', function (funcao) {
        var curso = funcao

        entradaDeDados.question('Disciplina: ', function (disciplina) {
            var materia = disciplina

            entradaDeDados.question('Nota 01: ', function (valor1) {
                var nota01 = valor1.replace(',', '.')

                entradaDeDados.question('Nota 02: ', function (valor2) {
                    var nota02 = valor2.replace(',', '.')

                    entradaDeDados.question('Nota 03: ', function (valor3) {
                        var nota03 = valor3.replace(',', '.')

                        entradaDeDados.question('Nota 04: ', function (valor4) {
                            var nota04 = valor4.replace(',', '.')

                            if (nota01 == '' || nota02 == '' || nota03 == '' || nota04 == '') {
                                console.log('!ERRO! Todos os valores devem ser preenchidas')
                            } else if (isNaN(nota01) || isNaN(nota02) || isNaN(nota03) || isNaN(nota04)) {
                                console.log('!ERRO! Os números fornecidos não são validos')
                            }
                            else if (nota01 > 10 || nota02 > 10 || nota03 > 10 || nota04 > 10) {
                                console.log('!ERRO! Os valores fornecidos devem ser menor que 10')
                            }
                            else if (nota01 < 0 || nota02 < 0 || nota03 < 0 || nota04 < 0) {
                                console.log('!ERRO! As notas não podem ser negativas')
                            }
                            else {
                                var resultado = Number(nota01) + Number(nota02) + Number(nota03) + Number(nota04)
                                resultado=resultado/4
                                console.log('Média do(a) aluno(a) ' + nome + ': ' + String(resultado.toFixed(1)).replace('.', ','))
                            }
                            if(resultado<4.9){
                                console.log('Aluno reprovado')
                            }
                            else if(resultado>=5 && resultado<=6.9){
                                console.log('Aluno de recuperacao')
                            }
                            else if(resultado>=7){
                                console.log('Aluno Aprovado')
                            }
                            entradaDeDados.close()
                        })
                    })
                })
            })
        })
    })
})
