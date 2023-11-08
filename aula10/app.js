/***************************************************************************
 * Objetivo: Criação de uma API para manipular dados de estados e Cidades
 * Data: 01/11/23
 * Autor: Letícia Melo Silva
 * Versão: 1.0
***************************************************************************/

//importando as bibliotecas
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

//criando um objeto para manipular as requisiçoes da API
const app = express()

//request(recebe algum dado/entrada de dado na API)
//response(devolve algum dado/saida(retorno) de dados da API)
app.use((request, response, next) => {//restriçes da API
    response.header('Access-Control-Allow-Origin', '*')//permite especificar quem podera acessar a api(*=liberar acesso publico,ip=libera acessso apenas para aquele ip, tambem da pra fazer com dois ips, ex:"100.20.300.10 , 9.70.13.3")
    response.header('Access-Control-Allow-Methods', 'GET')//permite esprecificar como a API sera requisitada(Get,post,put,delet)

    app.use(cors())//ativa as configuracoes de permissao no cors

    next()//faz com que o programa continue executando dps de sair dessa funcao
})

//endPoint: Retorna a lista a sigla de todos os estados
app.get('/estados/sigla', cors(), async function (request, response, next) {
    let controleEstadosCidades = require('./modulo/Estados_ARRAY&JSON.js')
    let listaEstados = controleEstadosCidades.getListaDeEstados();

    if (listaEstados) {
        response.json(listaEstados)
        response.status(200)
    }
    else {
        response.status(404);
    }
})

//endPoint: Retorna dados do estado filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async function (request, response, next) {
    //recebe uma variavel encaminhada como parametro na requisição
    let siglaEstado = request.params.uf
    let controleDadosEstado = require('./modulo/Estados_ARRAY&JSON.js')
    let dadosEstado = controleDadosEstado.getDadosEstado(siglaEstado)
    if (dadosEstado) {
        response.json(dadosEstado)
        response.status(200)

    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})

//endPoint: Retorna dados da capital filtrando pela sigla do estado
app.get('/capital/estado', cors(), async function (request, response, next) {
        //recebe uma variavel encaminhada como query string na requisição
    let siglaEstado = request.query.uf
    let controleDadosCapital = require('./modulo/Estados_ARRAY&JSON.js')
    let dadosCapital = controleDadosCapital.getCapitalEstado(siglaEstado)
    if (dadosCapital) {
        response.json(dadosCapital)
        response.status(200)

    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})

//endPoint: Retorna dados dos estados de acordo com sua regiao
app.get('/estado/:regiao', cors(), async function (request, response, next) {
    //recebe uma variavel encaminhada como parametro na requisição
    let local = request.params.regiao
    let controleDadosRegiao = require('./modulo/Estados_ARRAY&JSON.js')
    let dadosRegiao = controleDadosRegiao.getEstadosRegiao(local)
    if (dadosRegiao) {
        response.json(dadosRegiao)
        response.status(200)

    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})

//endPoint: Retorna dados da capital do País 
app.get('/pais/capital', cors(), async function (request, response, next) {
    let controleCapitais = require('./modulo/Estados_ARRAY&JSON.js')
    let listaCapitais = controleCapitais.getCapitalPais()

    if (listaCapitais) {
        response.json(listaCapitais)
        response.status(200)
    }
    else {
        response.status(404);
    }
})

//endPoint: Retorna dados das cidades de um estado
app.get('/estado/sigla/:uf', cors(), async function (request, response, next) {
    let siglaEstado = request.params.uf
    let controleDadosCidades = require('./modulo/Estados_ARRAY&JSON.js')
    let dadosCidade = controleDadosCidades.getCidades(siglaEstado)
    if (dadosCidade) {
        response.json(dadosCidade)
        response.status(200)

    }
    else {
        response.status(404);
        response.json({ erro: 'Item não encontrado' })
    }
})

app.listen('8080', function () {
    console.log('API funcionando!!!! Bom trabalho, dá uma descançada, um cafezinho nunca cai mal!!')
})
