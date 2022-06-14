function alunosAprovados (media, ...alunos)
{
    let aprovados = [];

    for(aluno of alunos)
    {
        console.log(aluno);
        if(aluno.nota >= media)
        {
            aprovados.push(aluno);
        }
    }

    console.log(`Alunos aprovados com média ${media}: `);
    
    for(aluno of aprovados)
    {
        console.log(`${aluno.nome} com nota ${aluno.nota}, `);
    }
}

var aluno1 = new Object();
var aluno2 = new Object();
var aluno3 = new Object();

aluno1.nome = "Joao";
aluno1.nota = 5;

aluno2.nome = "Andre";
aluno2.nota = 6;

aluno3.nome = "Maria";
aluno3.nota = 7;

alunosAprovados(6, aluno1, aluno2, aluno3);