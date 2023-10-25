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

    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].sigla == uf) {
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.capital = estados_cidades.estadosCidades.estados[cont].capital
            JSONEstados.regiao = estados_cidades.estadosCidades.estados[cont].regiao
        }
        cont++
    }
    return JSONEstados

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
const getCapitalEstado = function (siglaEstado) {
    let cont = 0
    let uf = siglaEstado
    let JSONEstados = {}

    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].sigla == uf) {
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.capital = estados_cidades.estadosCidades.estados[cont].capital
        }
        cont++
    }
    return JSONEstados
}

const getEstadosRegiao = function (local) {
    let cont = 0
    let regiao = local
    let JSONEstados = {}
    let ARRAYEstados = []

    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].regiao == regiao) {
            let estados = {}
            estados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            estados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            ARRAYEstados.push(estados)
            JSONEstados.regiao = estados_cidades.estadosCidades.estados[cont].regiao
            JSONEstados.estados = ARRAYEstados
        }
        cont++
    }
    return JSONEstados
}

const getCapitalPais = function () {
    let cont = 0
    let JSONPais = {}
    let ARRAYCapitais = []
    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].capital_pais != undefined) {
            let JSONCapitais = {}
            JSONCapitais.capital_atual = estados_cidades.estadosCidades.estados[cont].capital_pais.capital
            JSONCapitais.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONCapitais.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONCapitais.capital = estados_cidades.estadosCidades.estados[cont].capital
            JSONCapitais.regiao = estados_cidades.estadosCidades.estados[cont].regiao
            JSONCapitais.capital_pais_ano_inicio = estados_cidades.estadosCidades.estados[cont].capital_pais.ano_inicio
            JSONCapitais.capital_pais_ano_termino = estados_cidades.estadosCidades.estados[cont].capital_pais.ano_fim

            ARRAYCapitais.push(JSONCapitais)
            JSONPais.capitais = ARRAYCapitais
        }
        cont++
    }
    return JSONPais
}

const getCidades = function (sigla) {
    let cont = 0
    let indice = 0
    let uf = sigla
    let JSONCidades = {}
    let ARRAYCidades = []

    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].sigla == uf) {
            while (indice < estados_cidades.estadosCidades.estados[cont].cidades.length) {
                ARRAYCidades.push(estados_cidades.estadosCidades.estados[cont].cidades[indice].nome)
                indice++
            }
            JSONCidades.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONCidades.descricao = estados_cidades.estadosCidades.estados[cont].nome
        }
        cont++
    }
    JSONCidades.quantidade_cidades = indice
    JSONCidades.cidades = ARRAYCidades
    return JSONCidades

}


getListaDeEstados()
getDadosEstado('RJ')
getCapitalEstado('SP')
getEstadosRegiao('Sul')
getCapitalPais()
getCidades('AC')

