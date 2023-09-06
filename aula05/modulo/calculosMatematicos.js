function calculadora(numero1, numero2, tipoCalculo){
    let valor1=numero1
    let valor2=numero2
    let sinal=tipoCalculo
    let resultado
    switch (sinal) {
        case '1':
           resultado=valor1+valor2
            break;
        case '2':
           resultado=valor1-valor2
            break;                 
        case '3':
           resultado=valor1*valor2
            break;
        case '4':
            if(valor2==0){
                console.log('!ERRO!')
               }
               else{
                   resultado=valor1/valor2                        
           }
            break;            
        default:
            console.log('!ERRO!')
            break;
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