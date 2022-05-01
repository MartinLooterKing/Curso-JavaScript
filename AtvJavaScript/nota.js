const nome = 'Nicollas'
const grades1 = 8
const grades2 = 9
const grades3 = 10
const avarage = (grades1 + grades2 + grades3) / 3
const avarageHigh = avarage >= 7;

console.log(nome + ' na primeira prova tirou: ' + grades1)
console.log(nome + ' na segunda prova tirou: ' + grades2)
console.log(nome + ' na terceira prova tirou: ' + grades3)

if(avarageHigh){
    console.log(nome + ' ficou com a média ' + avarage + ' e foi aprovado')
}else{
    console.log(nome + ' ficou com a média ' + avarage + ' e foi reprovado')
}