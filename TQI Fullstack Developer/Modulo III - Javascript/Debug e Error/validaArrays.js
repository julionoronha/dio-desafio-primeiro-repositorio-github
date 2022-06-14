function validaArray(array, tamanho){
    
    if(!array && !tamanho){
        throw new ReferenceError('Parâmetros não enviados corretamente');
    }

    if(typeof array !== 'object'){
        throw new TypeError('Tipo de Array não é \'object\'');
    }

    if(typeof tamanho !== 'number'){
        throw new TypeError('Tamanho do array não é \'number\'');
    }

    if(array.length !== tamanho){
        throw new RangeError('Tamanho do array diferente do declarado');
    }

    return array;
}

let array = []

try{
    array = validaArray(['a','b'], 2);
}catch (e){
    if(e instanceof ReferenceError){
        console.log('Erro de referência');
        console.log(e.message);
    }else if(e instanceof TypeError){
        console.log('Erro de tipagem');
        console.log(e.message);
    }else if(e instanceof RangeError){
        console.log('Erro de tamanho do array');
        console.log(e.message);
    }else {
        console.log("Erro desconhecido: " + e);
    }
}finally{
    console.log(array);
}