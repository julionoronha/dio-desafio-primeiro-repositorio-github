var num1 = 14, num2 = 4;

console.log(criaPrimeiraFrase(num1,num2) + criaSegundaFrase(num1,num2));

function criaPrimeiraFrase (num1, num2)
{
    let saoIguais = " ";

    if(num1 != num2)
    {
        saoIguais = " não "
    }

    return "Os números " + num1 +" e " + num2 + saoIguais + "são iguais."
}

function criaSegundaFrase (num1, num2)
{
    let resultado10, resultado20;
    const soma = num1 + num2;;

    soma > 10 ? resultado10 = "maior " : resultado10 = "menor ";
    soma > 20 ? resultado20 = "maior " : resultado20 = "menor ";

    return " Sua soma é " + soma + " que é " + resultado10 + "que 10 e " + resultado20 + "que 20.";

}
/*comparaNumeros(numero1, numero2);

function comparaNumeros(num1, num2)
{
    
    let soma = (num1 + num2);
    let saoIguais = (num1 == num2);
    let somaMaiorQue10 = (soma > 10);
    let somaMenorQue20 = (soma < 20);

    process.stdout.write("Os números " + num1 + " e " + num2);

    !saoIguais ? process.stdout.write(" não são") : process.stdout.write(" são");

    process.stdout.write(" iguais. Sua soma é " + soma + ", que é ");

    somaMaiorQue10 ? process.stdout.write("maior ") : process.stdout.write("menor ");

    process.stdout.write("que 10 e ");
    
    somaMenorQue20 ? process.stdout.write("menor ") : process.stdout.write("maior ");

    process.stdout.write("que 20.");

}
*/