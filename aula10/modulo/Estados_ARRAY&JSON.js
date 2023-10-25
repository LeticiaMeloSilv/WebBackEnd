var estados_cidades = require('../estados_cidades')

const getListaDeEstados = function () {
    let cont = 0
    let arrayUf = []
    let JSONEstados = {};
    while (cont < estados_cidades.estadosCidades.estados.length) {
        arrayUf.push(estados_cidades.estadosCidades.estados[cont].sigla)
        cont++
    }
    JSONEstados.uf = arrayUf
    JSONEstados.quantidade = cont
    return JSONEstados
}

const getDadosEstado = function (nomeEstado) {
    let cont = 0
    let uf = nomeEstado
    let JSONEstados = {};

    if (estados_cidades.estadosCidades.estados[cont].sigla == uf) {
            while (cont < estados_cidades.estadosCidades.estados.length) {
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.capital = estados_cidades.estadosCidades.estados[cont].capital
            JSONEstados.regiao = estados_cidades.estadosCidades.estados[cont].regiao

            cont++
        }

    }

    //     if (dados.email != undefined) {
    //         console.log(`Email: ${dados.email}`)
    //     }
    //     if (dados.ra != undefined) {
    //         console.log(`RA: ${dados.ra}\n*****************************`)
    //     }
    //     else {
    //         console.log('*****************************');
    //     }
    // })
}

getListaDeEstados()
getDadosEstado('SP')
// console.log(getDadosEstado('SP'))
