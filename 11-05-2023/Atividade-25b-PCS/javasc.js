function calculaIMC(){
	parseFloat;peso = document.getElementById("campoPeso").value;
	parseFloat;altura = document.getElementById("campoAltura").value;
	
	resultIMC = (peso/(altura*altura))*10000;
	
	var labelResult = document.getElementById("labelIMC");
	labelResult.innerHTML="o IMC é: " + resultIMC;
}

function converteCM(){
	parseFloat(metros = document.getElementById("campoMetros").value);
	
	centimetros = metros*100;
	
	var labelResultCM= document.getElementById("labelCM");
	labelResultCM.innerHTML="o valor em centimetros é: " + centimetros;
}

function soma(){
	nun1 = parseFloat(document.getElementById("num1").value);
	nun2 = parseFloat(document.getElementById("num2").value);
	
	soma = parseFloat(nun1+nun2);
	
	var labelResultSoma= document.getElementById("labelCalculadora");
	labelResultSoma.innerHTML="A soma é: "+ soma;
	
}

function subtrai(){
	parseInt;nun1 = document.getElementById("num1").value;
	parseInt;nun2 = document.getElementById("num2").value;
	
	parseInt;sub=nun1-nun2;
	
	var labelResultSub= document.getElementById("labelCalculadora");
	labelResultSub.innerHTML="A soma é: "+ sub;
}

function multiplicacao(){
	parseInt;nun1 = document.getElementById("num1").value;
	parseInt;nun2 = document.getElementById("num2").value;
	
	parseInt;mult=nun1*nun2;
	
	var labelResultMult= document.getElementById("labelCalculadora");
	labelResultMult.innerHTML="A soma é: "+ mult;
}

function divisao(){
	parseInt;nun1 = document.getElementById("num1").value;
	parseInt;nun2 = document.getElementById("num2").value;
	
	parseInt;div=nun1/nun2;
	
	var labelResultDiv= document.getElementById("labelCalculadora");
	labelResultDiv.innerHTML="A soma é: "+ div;
}

function converterData(){
	stringCompleta=document.getElementById("campoData").value;
	arrayData=stringCompleta.split("/");
	var laberlData = document.getElementById("labelData");
	labelData.innerHTML=arrayData[1]+'/'+arrayData[0]+arrayData[2]
	
}