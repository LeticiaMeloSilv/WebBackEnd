function calculadora(codigo, preco){
    let p=preco
    let c=codigo
    let resultado
    
   if(c==1){
    resultado=p*8/100
    console.log('O desconto oferecido para essa forma de pagamento é de 8%\nSub-Total: '+ String(resultado.toFixed(2)).replace('.', ','))
   }
   else if(c==2){
    resultado=p*4/100
    console.log('O desconto oferecido para essa forma de pagamento é de 4%\nSub-Total: '+ String(resultado.toFixed(2)).replace('.', ','))
   }
   else if(c==3){
    resultado=p/2
    console.log('O valor de cada parcela é de 2x\nSub-Total: '+ String(resultado.toFixed(2)).replace('.', ','))
   }
   else if(c==4){
    resultado=(p*8/100)/4
    console.log('O valor de cada parcela é de 4x\nSub-Total: '+ String(resultado.toFixed(2)).replace('.', ','))
   }
    else if (p == '' || c == '') {
    console.log('!ERRO! Todos os dados devem ser preenchidos')
    }
    else if (isNaN(p) || isNaN(c)) {
    console.log('!ERRO! Confira se os valores inseridos são numeros')
    }
    else{
        console.log('!ERRO! Verifique os dados preenchidos')
    }
    if(resultado != undefined){
        return resultado.toFixed(2)
    }
    else{
        return false;
    }
}

module.exports={
    calculadora
}