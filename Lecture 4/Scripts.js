function insert(num){
    document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML+num;
}

function clean(){
    document.getElementById('answer').innerHTML = "";
}

function equal(){
    document.getElementById('hist').innerHTML += document.getElementById('answer').innerText; 
    document.getElementById('hist').innerHTML += '=';
    document.getElementById('answer').innerHTML = eval(document.getElementById('answer').innerHTML);
    document.getElementById('hist').innerHTML += document.getElementById('answer').innerText; 
    document.getElementById('hist').innerHTML +='<hr />';
}
function back(){
   var exp = document.getElementById('answer').innerHTML;
   document.getElementById('answer').innerHTML = exp.substring(0, exp.length-1);
}

