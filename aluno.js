const alunos = ['Joao', 'Juliana', 'Caio','Ana'];
const media = [10,8,7.5,9];

const listaALMD = [alunos, media];

function exibeNN(alunos){
    if(listaALMD[0].includes(alunos)){
        const indice = listaALMD[0].indexOf(alunos);
        const mediaAL= listaALMD[1][indice];

        console.log(`${alunos} tem a média${mediaAL}.`);
    }else{
        console.log('Aluno não encontrado na base de dados!')
    }
}
exibeNN('Joao');
