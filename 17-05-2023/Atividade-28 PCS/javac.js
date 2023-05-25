var carro="";

function cadastrarCarro(){
	carro = {
	cor: document.getElementById("cor").value,
    marca: document.getElementById("marca").value,
	modelo: document.getElementById("modelo").value,
	ano: parseInt(document.getElementById("ano").value)
}
}
	
	function inprime(){
		var labelinforcoes = document.getElementById("informacoes2");
		labelinforcoes.innerHTML =(carro.cor+","+carro.marca+","+carro.modelo+","+carro.ano);
	}
    