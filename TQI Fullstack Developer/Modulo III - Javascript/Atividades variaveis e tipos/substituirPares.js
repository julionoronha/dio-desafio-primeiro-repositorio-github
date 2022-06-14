function substituirPares (numeros)
{
    if(!numeros || numeros.length == 0){
        return -1;
    }

    let numerosModificado = numeros;

    for(let i = 0; i < numerosModificado.length; i++)    {
        if(numerosModificado[i] % 2 == 0 && numerosModificado[i] != 0)
        {
            numerosModificado[i] = 0;
        }
    }

    return numerosModificado;
}

console.log(substituirPares([1, 3, 4, 6, 80, 33, 23, 90]));
console.log(substituirPares([]));
