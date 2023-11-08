var estados_cidades = require('../estados_cidades')

const getListaDeEstados = function () {
    let cont = 0
    let arrayUf = []
    let JSONEstados = {};
    let status = false
    while (cont < estados_cidades.estadosCidades.estados.length) {
        arrayUf.push(estados_cidades.estadosCidades.estados[cont].sigla)
        cont++
        status = true
    }
    JSONEstados.uf = arrayUf
    JSONEstados.quantidade = cont
    if (status) {
        return JSONEstados
    }
    else {
        return false
    }

}

const getDadosEstado = function (siglaEstado) {
    let cont = 0
    let uf = siglaEstado.toUpperCase()
    let JSONEstados = {};
    let status = false


    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].sigla == uf) {
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.capital = estados_cidades.estadosCidades.estados[cont].capital
            JSONEstados.regiao = estados_cidades.estadosCidades.estados[cont].regiao
            status = true
        }
        cont++
    }
    if (status) {
        return JSONEstados
    }
    else {
        return false
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

const getCapitalEstado = function (siglaEstado) {
    let cont = 0
    let uf = siglaEstado.toUpperCase()
    let JSONEstados = {}
    let status = false

    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].sigla == uf) {
            JSONEstados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONEstados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            JSONEstados.capital = estados_cidades.estadosCidades.estados[cont].capital
            status = true
        }
        cont++
    }
    if (status) {
        return JSONEstados
    }
    else {
        return false
    }
}

const getEstadosRegiao = function (local) {
    let cont = 0
    let regiao = local
    let JSONEstados = {}
    let ARRAYEstados = []
    let status = false

    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].regiao == regiao) {
            let estados = {}
            estados.uf = estados_cidades.estadosCidades.estados[cont].sigla
            estados.descricao = estados_cidades.estadosCidades.estados[cont].nome
            ARRAYEstados.push(estados)
            JSONEstados.regiao = estados_cidades.estadosCidades.estados[cont].regiao
            JSONEstados.estados = ARRAYEstados
            status = true
        }
        cont++
    }
    if (status) {
        return JSONEstados
    }
    else {
        return false
    }
}

const getCapitalPais = function () {
    let cont = 0
    let JSONPais = {}
    let ARRAYCapitais = []
    let status = false

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
            status = true

        }
        cont++
    }
    if (status) {
        return JSONPais
    }
    else {
        return false
    }
}

const getCidades = function (sigla) {
    let cont = 0
    let indice = 0
    let uf = sigla.toUpperCase()
    let JSONCidades = {}
    let ARRAYCidades = []
    let status = false


    while (cont < estados_cidades.estadosCidades.estados.length) {
        if (estados_cidades.estadosCidades.estados[cont].sigla == uf) {
            while (indice < estados_cidades.estadosCidades.estados[cont].cidades.length) {
                ARRAYCidades.push(estados_cidades.estadosCidades.estados[cont].cidades[indice].nome)
                indice++
            }
            JSONCidades.uf = estados_cidades.estadosCidades.estados[cont].sigla
            JSONCidades.descricao = estados_cidades.estadosCidades.estados[cont].nome
            status = true
        }
        cont++
    }
    JSONCidades.quantidade_cidades = indice
    JSONCidades.cidades = ARRAYCidades
    if (status) {
        return JSONCidades
    }
    else {
        return false
    }

}

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}

