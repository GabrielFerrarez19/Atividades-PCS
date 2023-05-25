var carro = '';/*decalra a variavel carro como um espaço vazio*/
var vetorCarros = [];/*declara o vetorCarros como vazio*/
var stringCarros = "";/*declara o stringCarros como vazio*/

function preencheObjeto(){/*inicia a função preencheObjeto*/
    
    var Marca = document.getElementById("txtMarca").value;/*esta decalrando e atribuindo a Marca o valor do input txtMarca*/
    var Modelo = document.getElementById("txtModelo").value;/*esta decalrando e atribuindo a Modelo o valor do input txtModelo*/
    var Ano = parseInt(document.getElementById("txtAno").value);/*esta decalrando e atribuindo a Ano o valor do input txtAno*/
    var Cor = document.getElementById("txtCor").value;/*esta decalrando e atribuindo a Cor o valor do input txtCor*/

    carro = ["Marca: " + Marca + " Modelo: " + Modelo + " Ano: " + Ano + " Cor: " + Cor];/*esta atribuindo a carro o valor das variaveis Marca, Modelo, Ano, Cor*/
	
    vetorCarros.push(carro);/*esta adicionando elementos a  variavel carro*/
	
	limpaTxt()/*esta ativando a função limpaTxt*/
		
	
    
}

function mostrarCarro(){/*inicia a função mostrarCarro*/
	
	stringCarros = vetorCarros.join("<br>");/*atribui a stringCarros o valor de vetorCarros e os junta colocando um br entre eles */
   
    var lblMostrarCarro = document.getElementById("lblMostrarCarro");/*decalra a variavel lblMostrarCarro e seleciona a label lblMostrarCarro*/
    lblMostrarCarro.innerHTML = stringCarros;/*aplica na label stringCarros*/

}

function limpaTxt(){/*inicia a função limpaTxt*/
    Marca = document.getElementById("txtMarca").value = " ";/*seleciona txtMarca e atribui um valor vazio*/
    Modelo = document.getElementById("txtModelo").value = " ";/*seleciona txtModelo e atribui um valor vazio*/
    Ano = document.getElementById("txtAno").value = " ";/*seleciona txtAno e atribui um valor vazio*/
    Cor = document.getElementById("txtCor").value = " ";/*seleciona txtCor e atribui um valor vazio*/
}
