/*********************************************************************
 * Objetivo: Trabalhar com conceitos de ARRAY e JSON
 * Data: 27/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/

const { log } = require("console");

const conceitoArray = function () {
    let listaDeNomes = ['José', 'Maria', 'Luiz', 'Ana', true];
    console.log(listaDeNomes)
    console.log(listaDeNomes[0])
    //table exibe de forma bonitinha
    console.table(listaDeNomes)

    //typeof mostra o tipo do ngc
    console.log(typeof (listaDeNomes))
    console.log(typeof (listaDeNomes[0]))

    listaDeNomes[1] = 'Maria da Silva'
    console.table(listaDeNomes)

    listaDeNomes.push('André da Silva')
    console.table(listaDeNomes)
    //coloca elementos no inicio do array
    listaDeNomes.push('Carlos da Silva', 'Suzane da silva', 'Julia da Silva')
    console.table(listaDeNomes)

    listaDeNomes.unshift('Natalia da Silva', 'Pedro da Silva')
    console.table(listaDeNomes)
    //remove os elementos do final do ARRAY
    listaDeNomes.pop()
    console.table(listaDeNomes)
    //remove qualquer elemento do array a partir do primeiro parametro, sendo contado pelo segundo parametro
    listaDeNomes.splice(6, 1)
    console.table(listaDeNomes)
    //remove varios elementos a partir do primeiro parametro(quantidade definida pelo segundo parametro)
    listaDeNomes.splice(6, 3)
    console.table(listaDeNomes)
    //remove do inicio da matriz
    listaDeNomes.shift()
    console.table(listaDeNomes)
}

const percorrendoArray = function () {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Computador', 'Caixa de Som', 'Impressora', 'Fone de Ouvido', 'Web Cam', 'Microfone', 'HD', 'Memoria']
    console.log(listaDeProdutos.length)

    // let cont =0
    // while(cont<listaDeProdutos.length){
    //   console.log(`Nome do Produto: ${listaDeProdutos[cont]}`)  
    //   cont++
    // }
    // console.log('\n')
    // for(let cont=0;cont<listaDeProdutos.length;cont++){
    //     console.log(`Nome do Produto: ${listaDeProdutos[cont]}`)  
    // }
    // console.log('\n')
    // listaDeProdutos.forEach(function(produto){
    //     console.log(`Nome do Produto: ${produto}`)  
    // })

    console.log(listaDeProdutos.indexOf('Impressora'))

    console.log(listaDeProdutos.includes('Impressora'))

}

const filtrarProduto = function (nomeProduto) {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Computador', 'Caixa de Som', 'Impressora', 'Fone de Ouvido', 'Web Cam', 'Microfone', 'HD', 'Memoria']

    let nome = nomeProduto
    let status = false
    let cont = 0
    // if (listaDeProdutos.indexOf(nome)>=0){
    //     status=true
    // }

    // if(listaDeProdutos.includes(nome)){
    // status=true
    // }

    // status=listaDeProdutos.includes(nome)

    listaDeProdutos.forEach(function (produto) {
        if (produto.toUpperCase() == nome.toUpperCase())
            // status=true
            cont++
    })

    return cont
}
// console.log(filtrarProduto('mouse'))

const conceitoJSON = function () {

    //colocando atributos manuais 
    let aluno = { nome: 'Le', telefone: '11967755089', celular: '11967755089' }
    let aluno2 = { nome: 'Caua', telefone: '2467929404', celular: '402527502940' }
    let aluno3 = { nome: 'Vinicius', telefone: '2467929404', celular: '402527502940' }
    //criando um objeto do tipo array e guardando elementos JSON dentro dele
    let arrayAlunos = []
    arrayAlunos.push(aluno, aluno2, aluno3)

    //criando outro atributo no JSON d maneira dinamica, sem tocar na variael em si 
    aluno.email = 'katsu.nahero@gmail.com'
    aluno.ra = 123456

    //exibindo todos os atribuos da variavel
    console.log(aluno + '\n-------------------------------')
    //exibindo apenas um atributo
    console.log(aluno.nome + '\n-------------------------------')
    //pega o array inteiro
    console.log(arrayAlunos + '\n-------------------------------')
    //pega só um bglh do array
    console.log(arrayAlunos[1].nome + '\n-------------------------------\n\n')
    //para cada indice do array, ele guarda os valores na variavel dados e 
    arrayAlunos.forEach(function (dados) {
        console.log(`Nome do aluno: ${dados.nome}`)
        console.log(`Telefone: ${dados.telefone}`)
        console.log(`Celular: ${dados.celular}`)
        if (dados.email != undefined) {
            console.log(`Email: ${dados.email}`)
        }
        if (dados.ra != undefined) {
            console.log(`RA: ${dados.ra}\n*****************************`)
        }
        else {
            console.log('*****************************');
        }
    })
    console.table(arrayAlunos)

}

const cadastroProdutos = function () {
    let arrayProdutos = []
    let JSONProdutos = {};
    let categorias = [
        { id: 1, nome_categoria: 'hardware', descricao_categoria: 'aaa' },
        { id: 2, nome_categoria: 'perifericos', descricao_categoria: 'bbb' },
        { id: 3, nome_categoria: 'games', descricao_categoria: 'ccc' },
        { id: 4, nome_categoria: 'escritorio', descricao_categoria: 'ddd' },
        { id: 5, nome_categoria: 'acessorios', descricao_categoria: 'eee' }
    ]
    let cores = [
        { id: 1, nome_cor: 'azul' },
        { id: 2, nome_cor: 'roxo' },
        { id: 3, nome_cor: 'verde' },
        { id: 4, nome_cor: 'preto' }
    ]

    let marcas = [
        { id: 1, nome_marca: 'dell', telefone: '968t7980210', email: 'dell@gmail.com' },
        { id: 2, nome_marca: 'intel', telefone: '25620309553', email: 'intel@outlook' },
        { id: 3, nome_marca: 'hp', telefone: '438722558', email: 'hp@hotmail' },
        { id: 4, nome_marca: 'Nvidia', telefone: '6384859877', email: 'nv@gmail' },
        { id: 5, nome_marca: 'Multilaser', telefone: '6384859877', email: 'multi@gmail' }
    ]

    let produto1 = {
        id: 1,
        nome: 'mouse',
        descricao: 'tsdfghçj',
        valor: 80,
        qtde: 200,
        categoria: categorias[1],
        cor: [
            cores[0],
            cores[1]
        ],
        marca: marcas[0]
        // categoria: {
        //     nome:categorias[1].nome,
        //     descricao:categorias[1].descricao_categoria
        // }
    }
    let produto2 = {
        id: 2,
        nome: 'teclado',
        descricao: 'dtfyhiop',
        valor: 889,
        qtde: 5590,
        categoria: categorias[1],
        cor: cores,
        marca: marcas[4]
    }

    let produto3 = {
        id: 3,
        nome: 'caixa de som',
        descricao: 'içhavasa',
        valor: 889,
        qtde: 5590,
        categoria: categorias[4],
        cor: [
            cores[0],
            cores[1],
            cores[2]
        ],
        marca: marcas[3]
    }

    arrayProdutos.push(produto1, produto2, produto3)
    //adicionando o array c tds os produts em um atributo do tipo json, pq o computador nn aceita array para execultar
    JSONProdutos.produtos = arrayProdutos
    JSONProdutos.count = arrayProdutos.length
    return JSONProdutos
}
// cadastroProdutos();

const imprimirProdutos=function(cadastroProdutos){
    let informacoes=cadastroProdutos
    console.log(typeof(informacoes))
    // informacoes.forEach(function (dados)){

    // }
    
}
imprimirProdutos();