var add='';




function adiciona(){
	add=document.getElementById("inputadd").value;
	
	
	var item = document.createElement("li")
	var els = document.getElementsByTagName("ul")
	els[0]
	els[0].appendChild(item)
	item.innerHTML = add;
}



function limpa(){
	if(confirm("Deseja apagar?")){
	add = document.getElementById("inputadd").value;
	var cl = document.getElementById("lista");
	var cli = cl.getElementsByTagName("li");
	cl.removeChild(cli[add-1]);
	}
	else{
		alert("Remoção cancelada")
	}	
	
}