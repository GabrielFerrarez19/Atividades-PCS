var carro="";
var vetorCarros=[];
var stringCaros="";
var i=1;
var i2=0;
function cadastrarCarro(){
	var marca = "<br>Marca: "+document.getElementById("marca").value;
	var modelo = "<br>Modelo:"+document.getElementById("modelo").value;
	var cor = "<br>Cor: "+document.getElementById("cor").value;
	var ano = "<br>Ano: "+parseInt(document.getElementById("ano").value);
	
	carro = [i,marca, modelo, ano, cor];
	console.log(carro);
	
	vetorCarros.push(carro);
	
	i++
}

	
function inprime(){
		
		stringCaros = vetorCarros.join("<br> Carro");
		
		var labelinforcoes = document.getElementById("informacoes2");
		labelinforcoes.innerHTML =("Carro"+stringCaros);
	}
    
function pesquisaId(){
	for(i2=0,i2)
}

function limpatxt(){
	document.getElementById("cor").value="";
	document.getElementById("marca").value="";
	document.getElementById("modelo").value="";
	document.getElementById("ano").value="";
}