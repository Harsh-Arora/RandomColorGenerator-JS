document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	generator();
    	set();
    }
}

function generator(){

	var options = "1234567890abcdef";
	var color = "#"

	for(var i=0; i<6; i++){
		color += options[Math.floor(Math.random() * 16)]
	}

	return color;
}

function set(){
	document.getElementById('res1code').innerHTML = generator();
	document.getElementById('res1').style.background = document.getElementById('res1code').innerHTML;

	document.getElementById('res2code').innerHTML = generator();
	document.getElementById('res2').style.background = document.getElementById('res2code').innerHTML;

	document.getElementById('res3code').innerHTML = generator();
	document.getElementById('res3').style.background = document.getElementById('res3code').innerHTML;

	document.getElementById('res4code').innerHTML = generator();
	document.getElementById('res4').style.background = document.getElementById('res4code').innerHTML;


	document.getElementById('res5code').innerHTML = generator();
	document.getElementById('res5').style.background = document.getElementById('res5code').innerHTML;	
}

document.getElementById('res1code').innerHTML = generator();
document.getElementById('res1').style.background = document.getElementById('res1code').innerHTML;

document.getElementById('res2code').innerHTML = generator();
document.getElementById('res2').style.background = document.getElementById('res2code').innerHTML;

document.getElementById('res3code').innerHTML = generator();
document.getElementById('res3').style.background = document.getElementById('res3code').innerHTML;

document.getElementById('res4code').innerHTML = generator();
document.getElementById('res4').style.background = document.getElementById('res4code').innerHTML;


document.getElementById('res5code').innerHTML = generator();
document.getElementById('res5').style.background = document.getElementById('res5code').innerHTML;
