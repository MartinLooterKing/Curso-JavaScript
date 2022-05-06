/*function iniciarAula(nomeAluno){
    return 'Olá, ' + nomeAluno + '! A aula começou.';
}

const mensagem = iniciarAula('Nicollas');

console.log(mensagem);*/

/*const iniciarAula = function (nomeAluno){
    return 'Olá, ' + nomeAluno + '! A aula começou.';
}

const mensagem = iniciarAula('Nicollas');

console.log(mensagem);*/

/*const iniciarAula = (nomeAluno) => `Olá, ${nomeAluno}! A aula começou.`;

const mensagem = iniciarAula('Nicollas');

console.log(mensagem);*/

function calculoAreaTerreno (largura, comprimento){

    largura = parseFloat(largura);
    comprimento = parseFloat(comprimento);
    
    let area = largura * comprimento;
    return area;

}

let largura = prompt('Digite a largura do terreno');
let comprimento = prompt('Digite o comprimento do terreno');

//let areaTerreno = calculoAreaTerreno(15, 25);
document.write(`O terreno possui ${calculoAreaTerreno(largura, comprimento)} metros quadrados.`);