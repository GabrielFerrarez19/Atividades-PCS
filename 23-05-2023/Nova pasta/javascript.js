var tempess="0"

function ok(){
	tempess = document.getElementById("tempoes").value;
	tempesss=tempess*1000
	setTimeout(function(){alerta();}, tempesss);
}


function removeAtrasado(){
	setTimeout(function(){alerta();}, 1000);
}

function removeAtrasado2(){
setTimeout(function(){alerta();}, 2000);
}

function removeAtrasado3(){
setTimeout(function(){alerta();}, 5000);
}

function removeAtrasado4(){
setTimeout(function(){alerta();}, 10000);
}

function removeAtrasado5(){
setTimeout(function(){alerta();}, 30000);
}

function removeAtrasado6(){
setTimeout(function(){alerta();}, 60000);
}

function alerta(){
alert("Tempo Esgotado");
}