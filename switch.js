let option = prompt('Digite a opção desejada');
option = parseInt(option);

switch(option){
    case 1:
        //se a opção = 1
        document.write('Opção 1 selecionada');
        break;
    case 2:
        //se a opção = 2
        document.write('Opção 2 selecionada');
        break;
    default:
        //se a opção não for encontrada
        document.write('Opção inválida');
}