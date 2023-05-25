var add='';

function adiciona(){
	add = document.getElementById("dogs").value;
	
	
	var cl = document.getElementById("dogs_list");
	var item = document.createElement("li");
	
	cl.appendChild(item);
	item.innerHTML = add;
}

function adicionaGato(){
	add = document.getElementById("gatos").value;
	
	var cl = document.getElementById("cats_list");
	var item = document.createElement("li");
	
	cl.appendChild(item);
	item.innerHTML = add;
}

function retira(){
	add = document.getElementById("dogs").value;
	var cl = document.getElementById("dogs_list");
	var cli = cl.getElementsByTagName("li");
	cl.removeChild(cli[add-1]);	
}

function retiraGatos(){
	add = document.getElementById("gatos").value;
	var cl = document.getElementById("cats_list");
	var cli = cl.getElementsByTagName("li");
	cl.removeChild(cli[add-1]);	
}