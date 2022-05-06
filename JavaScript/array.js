/*const lista_frutas = Array('Banana', 'Maçã', 'Morango', 'Uva'); //[]

lista_frutas[1] = 'Banana';
lista_frutas[2] = 'Maçã';
lista_frutas[3] = 'Morango';
lista_frutas[4] = 'Uva';

alert(lista_frutas[2]);*/

const lista_coisas = [];

lista_coisas['frutas'] = Array();
lista_coisas['pessoas'] = Array();

lista_coisas['frutas'][1] = 'Banana';
lista_coisas['frutas'][2] = 'Maçã';
lista_coisas['frutas'][3] = 'Morango';

lista_coisas['pessoas'][1] = 'João';
lista_coisas['pessoas'][2] = 'José';
lista_coisas['pessoas'][3] = 'Maria';

document.write(lista_coisas['pessoas'][3]);