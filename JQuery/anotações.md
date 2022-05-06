Anotações JavaScript - Eventos mouse, teclado

$(document).ready( function(){

$('#divTest1').click( function(){ //dbclick, mouseover, mousedown, mouseout

alert('Elemento foi clicado');

});

});

<div id="divTest1" style="height: 150px; width: 150px; background: #CCC;"></div>

____________________________________________________________________________________


$(document).ready( function(){

$('#campo1').keydown( function(){ //keydown, keypress, keyup

alert('Botão pressionado'); 

});

});

<input id="campo1" type="text">

____________________________________________________________________________________


$(document).ready( function(){

$('.campo1').blur( function(){  //focus, blur, change

alert('Elemento modificado');

});

});

<select class="campo1">
<option value="1">Primeira opção</option>
<option value="2">Segunda opção</option>
</select>