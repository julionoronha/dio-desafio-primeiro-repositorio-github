var numero1 = 4, numero2 = 40;

comparaNumeros(numero1, numero2);

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