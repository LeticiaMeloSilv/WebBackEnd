/*********************************************************************
 * Objetivo: Trabalhar com conceitos de ARRAY e JSON
 * Data: 27/09/2023
 * Nome: Letícia
 * Versão: 1.0
 *********************************************************************/


const conceitoArray=function(){
    let listaDeNomes=['José', 'Maria', 'Luiz', 'Ana', true];
    console.log(listaDeNomes)
    console.log(listaDeNomes[0])
    console.table(listaDeNomes)

    console.log(typeof(listaDeNomes))
    console.log(typeof(listaDeNomes[0]))

    listaDeNomes[1]='Maria da Silva'
    console.table(listaDeNomes)

    listaDeNomes.push('André da Silva')
    console.table(listaDeNomes)
//colocaelementos no inicio do array
    listaDeNomes.push('Carlos da Silva', 'Suzane da silva', 'Julia da Silva')
    console.table(listaDeNomes)

    listaDeNomes.unshift('Natalia da Silva','Pedro da Silva')
    console.table(listaDeNomes)
//remove os elementos do final do ARRAY
    listaDeNomes.pop()
    console.table(listaDeNomes)
//remove qualquer elemento do array a partir do primeiro parametro, sendo contado pelo segundo parametro
    listaDeNomes.splice(6,1)
    console.table(listaDeNomes)
//remove varios elementos a partir do primeiro parametro(quantidade definida pelo segundo parametro)
    listaDeNomes.splice(6,3)
    console.table(listaDeNomes)
//remove do inicio da matriz
    listaDeNomes.shift()
    console.table(listaDeNomes)

}

const percorrendoArray=function(){
    let listaDeProdutos=['Mouse', 'Teclado', 'Monitor','Computador','Caixa de Som', 'Impressora','Fone de Ouvido', 'Web Cam', 'Microfone','HD','Memoria']
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

const filtrarProduto=function(nomeProduto){
    let listaDeProdutos=['Mouse', 'Teclado', 'Monitor','Computador','Caixa de Som', 'Impressora','Fone de Ouvido', 'Web Cam', 'Microfone','HD','Memoria']

let nome=nomeProduto
let status=false
let cont=0
    // if (listaDeProdutos.indexOf(nome)>=0){
    //     status=true
    // }

    // if(listaDeProdutos.includes(nome)){
    // status=true
    // }

    // status=listaDeProdutos.includes(nome)
    
    listaDeProdutos.forEach(function(produto){
        if(produto.toUpperCase() == nome.toUpperCase())
        // status=true
        cont++
    })

    return cont
}

console.log(filtrarProduto('mouse'))