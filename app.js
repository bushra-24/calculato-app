function getNumber(num){
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult(){
    var result = document.getElementById("result");
    result.value = ""
}

function getResult(){
    var result = document.getElementById("result");
    result.value = eval(result.value)
}

function deleteResult(){
    var result = document.getElementById("result");
    result.value = result.value.substring(0, result.value.length - 1)
}


function sqrt() {
    var result = document.getElementById("result");
	result.value = Math.sqrt(result.value);
}

function exp() {
    var result = document.getElementById("result");
	result.value = Math.exp(result.value);
}

function log() {
    var result = document.getElementById("result");
	result.value = Math.log(result.value);
}

function sin() {
    var result = document.getElementById("result");
	result.value = Math.sin(result.value);
}

function cos() {
    var result = document.getElementById("result");
	result.value = Math.cos(result.value);
}

function tan() {
    var result = document.getElementById("result");
	result.value = Math.tan(result.value);
}

