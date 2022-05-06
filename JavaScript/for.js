/*for(let x = 1; x < 11; x++){
    document.write(x + '<br />');

    //break;
    //continue;
}*/

const pessoas = [{ nome: 'Nicollas', idade: 23 }, 
{ nome: 'Marylya', idade: 24 }
];

const lista = pessoas.length;

for(let index = 0; index < lista; index++){
    const nome = pessoas[index].nome;
    const idade = pessoas[index].idade;
    console.log(nome, idade);
}