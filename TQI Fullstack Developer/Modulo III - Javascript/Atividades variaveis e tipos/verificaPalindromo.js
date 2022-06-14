let palindromo = "arara";
let naoPalindromo = "joao";

let frasePalindromo  = "roma me tem amor";
let frasePalindromo2 = "socorram me subi no onibus em marrocos";
let fraseNaoPalindromo = "esse e um script js"

function verificaPalindromo (frase)
{
    if(!frase)
    {
        console.log("Frase inválida!");
        return;
    }

    let fraseSemEspaco = frase.replaceAll(" ","");
    let fraseArray = Array.from(fraseSemEspaco);
    let palindromo = true;
    
    while(fraseArray.length > 1)
    {
        let primeiraLetra = fraseArray.shift();
        let ultimaLetra   = fraseArray.pop();

        if(primeiraLetra != ultimaLetra)
        {
            palindromo = false;
            break;
        }
    }

    let declaracao = "A frase \"" + frase;

    palindromo === true ? declaracao += "\" é palíndromo" : declaracao += "\" não é palíndromo";

    console.log(declaracao);
}

verificaPalindromo(null);
verificaPalindromo(palindromo);
verificaPalindromo(naoPalindromo);
verificaPalindromo(frasePalindromo);
verificaPalindromo(frasePalindromo2);
verificaPalindromo(fraseNaoPalindromo);