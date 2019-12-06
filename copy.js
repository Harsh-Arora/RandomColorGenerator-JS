function copyToClipboard(elementID){
	var aux = document.createElement("input");
	aux.setAttribute('Value',document.getElementById(elementID).innerHTML);
 document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
}