/*********************************************************************
 * Objetivo:Gerar média escolar, com dados do aluno e professor
 * Data: 13/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

const { Console } = require("console")

const gerarMedia = function (NomeAluno, NomeProfessor, SexoAluno, SexoProfessor, NomeCurso, NomeDisiplina, Valor1, Valor2, Valor3, Valor4, Valor5) {
    let aluno = NomeAluno
    let professor = NomeProfessor
    let sexoA = SexoAluno
    let sexoP = SexoProfessor
    let curso = NomeCurso
    let disciplina = NomeDisiplina
    let nota1 = Valor1
    let nota2 = Valor2
    let nota3 = Valor3
    let nota4 = Valor4
    let nota5 = Valor5

    let resultadoExame
    let resultado
    let situacao
    let exame = false
    let status = false

    if (aluno == '' || professor == '' || sexoA == '' || sexoP == '' || curso == '' || disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        console.log('!ERRO! É obrigatorio informar todos os valores.')
    }
    else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('!ERRO! Não é possivel a entrada de dados em caracteres.')
    }
    else if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {
        console.log('!ERRO! Notas abaixo de 0(zero) ou acima de 100(cem), não são permitidas.')
    }
    else {
        nota1 = Number(nota1)
        nota2 = Number(nota2)
        nota3 = Number(nota3)
        nota4 = Number(nota4)
        nota5 = Number(nota5)
        resultado = (nota1 + nota2 + nota3 + nota4) / 4
        if (resultado > 70.00) {
            if (sexoA == 'F' || sexoA == 'Fem' || sexoA == 'Feminino') {
                situacao = 'Aprovada'
            }
            else if (sexoA = 'M' || sexoA == 'Masc' || sexoA == 'Masculino') {
                situacao = 'Aprovado'
            }
        }
        else if (resultado < 50.00) {
            if (sexoA = 'M' || sexoA == 'Masc' || sexoA == 'Masculino') {
                situacao = 'Reprovado'
            }
            else if (sexoA == 'F' || sexoA == 'Fem' || sexoA == 'Feminino') {
                situacao = 'Reprovada'
            }
        }
        else if (resultado > 50.00 && resultado < 70.00) {
            exame = true
            resultadoExame = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
            if (resultadoExame > 60) {
                if (sexoA = 'M' || sexoA == 'Masc' || sexoA == 'Masculino') {
                    situacao = 'Aprovado no exame'
                }
                else if (sexoA == 'F' || sexoA == 'Fem' || sexoA == 'Feminino') {
                    situacao = 'Aprovada no exame'
                }
            }
            else {
                if (sexoA = 'M' || sexoA == 'Masc' || sexoA == 'Masculino') {
                    situacao = 'Reprovado no Exame'
                }
                else if (sexoA == 'F' || sexoA == 'Fem' || sexoA == 'Feminino') {
                    situacao = 'Reprovada no Exame'
                }
            }
        }
        if (sexoP == 'F' || sexoP == 'Fem' || sexoP == 'Feminino') {
            if (exame) {
                if (sexoA = 'F' || sexoA == 'Fem' || sexoA == 'Feminino') {
                    console.log(`A aluna ${aluno} foi ${situacao} na disciplina ${disciplina}.\nCurso: ${curso}\n Professora: ${professor}\nNotas da aluna: ${nota1} ${nota2} ${nota3} ${nota4} ${nota5}\nMedia Final: ${resultado}\nMédia final(Exame): ${resultadoExame}`)
                }
                else if (sexoA = 'M' || sexoA == 'Masc' || sexoA == 'Masculino') {
                    console.log(`O aluno ${aluno} foi ${situacao} na disciplina ${disciplina}.\nCurso: ${curso}\n Professora: ${professor}\nNotas do aluno: ${nota1} ${nota2} ${nota3} ${nota4} ${nota5}\nMedia Final: ${resultado}\nMédia final(Exame): ${resultadoExame}`)
                }
            }
            else {
                if (sexoA = 'F' || sexoA == 'Fem' || sexoA == 'Feminino') {
                    console.log(`A aluna ${aluno} foi ${situacao} na disciplina ${disciplina}.\nCurso: ${curso}\n Professora: ${professor}\nNotas da aluna: ${nota1} ${nota2} ${nota3} ${nota4}\nMedia Final: ${resultado}`)
                }
                else if (sexoA = 'M' || sexoA == 'Masc' || sexoA == 'Masculino') {
                    console.log(`O aluno ${aluno} foi ${situacao} na disciplina ${disciplina}.\nCurso: ${curso}\n Professora: ${professor}\nNotas do aluno: ${nota1} ${nota2} ${nota3} ${nota4}\nMedia Final: ${resultado}`)
                }
            }
        }
        else if (sexoP == 'M' || sexoP == 'Masc' || sexoP == 'Masculino') {
            if (exame) {
                if (sexoA = 'F' || sexoA == 'Fem' || sexoA == 'Feminino') {
                    console.log(`A aluna ${aluno} foi ${situacao} na disciplina ${disciplina}.\nCurso: ${curso}\n Professor: ${professor}\nNotas da aluna: ${nota1} ${nota2} ${nota3} ${nota4}\nMedia Final: ${resultado}\nMédia final(Exame): ${resultadoExame}`)
                }
                else if (sexoA = 'M' || sexoA == 'Masc' || sexoA == 'Masculino') {
                    console.log(`O aluno ${aluno} foi ${situacao} na disciplina ${disciplina}.\nCurso: ${curso}\n Professor: ${professor}\nNotas do aluno: ${nota1} ${nota2} ${nota3} ${nota4} ${nota5}\nMedia Final: ${resultado}\nMédia final(Exame): ${resultadoExame}`)
                }
            }
            else {
                if (sexoA = 'F' || sexoA == 'Fem' || sexoA == 'Feminino') {
                    console.log(`A aluna ${aluno} foi ${situacao} na disciplina ${disciplina}.\nCurso: ${curso}\n Professor: ${professor}\nNotas da aluna: ${nota1} ${nota2} ${nota3} ${nota4}\nMedia Final: ${resultado}`)
                }
                else if (sexoA = 'M' || sexoA == 'Masc' || sexoA == 'Masculino') {
                    console.log(`O aluno ${aluno} foi ${situacao} na disciplina ${disciplina}.\nCurso: ${curso}\n Professor: ${professor}\nNotas do aluno: ${nota1} ${nota2} ${nota3} ${nota4}\nMedia Final: ${resultado}`)
                }
            }
        }
        else {
            console.log('Verifique os dados inseridos')
        }
        status = true
    }
    return status
}

console.log(gerarMedia('maria', 'vini', 'F', 'M', 'Ds', 'Fpoo', '98', '30', '70', '80', '100'))
