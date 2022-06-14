function calculaIdade(anos)
{
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.anos + anos} de idade.`;
}

let pessoa = { nome: "Joao" ,
               anos: 26 }

console.log(calculaIdade.call(pessoa, 2));
console.log(calculaIdade.apply(pessoa, [3]));