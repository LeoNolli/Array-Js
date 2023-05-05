const nomes =['Ana','Marcos', 'Maria','Mauros'];
const medias = [7,4.5,8,7.5];

const reprovados = nomes.filter((aluno, indice)=>{
    return medias [indice]  < 7;
});

console.log (reprovados);
