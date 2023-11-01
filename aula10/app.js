/***************************************************************************
 * Objetivo: Criação de uma API para manipular dados de estados e Cidades
 * Data: 01/11/23
 * Autor: Letícia Melo Silva
 * Versão: 1.0
***************************************************************************/

//importando as bibliotecas
const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')

//criando um objeto para manipular as requisiçoes da API
const app=express()

//request(recebe algum dado/entrada de dado na API)
//response(devolve algum dado/saida(retorno) de dados da API)
app.use((request, response, next)=>{//restriçes da API
    response.header('Access-Control-Allow-Origin', '*')//permite especificar quem podera acessar a api(*=liberar acesso publico,ip=libera acessso apenas para aquele ip, tambem da pra fazer com dois ips, ex:"100.20.300.10 , 9.70.13.3")
    response.header('Access-Control-Allow-Methods', 'GET')//permite esprecificar como a API sera requisitada(Get,post,put,delet)

    app.use(cors())//ativa as configuracoes de permissao no cors

    next()//faz com que o programa continue executando dps de sair dessa funcao
})

//endPoints:
app.get('/estados/sigla', cors(), async function(request,response,next){
    let controleEstadosCidades=require('./modulo/Estados_ARRAY&JSON.js')
    let listaEstados=controleEstadosCidades.getListaDeEstados();

    response.json(listaEstados)
    response.status(200)
})

app.listen('8080', function(){
    console.log('API funcionando!!!! Bom trabalho, dá uma descançada, um cafezinho nunca cai mal!!')
})