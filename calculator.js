let show=document.getElementById("output-screen");
function display(num){
    show.value+=num;
}
function calculate(){
    try{
        show.value=eval(show.value);
    }
    catch(err){
        alert("This is invalid")
    }
}
function text(){
    show.value=" ";
}
function del(){
    show.value=show.value.slice(0,-1);
}

/*
let outputscreen=document.getElementById("output-screen");
function display(num){
    outputscreen.value+=num;
}
function calculate(){
try{
    outputscreen.value=eval(outputscreen.value);
}
catch(err){
    alert("Invalid")
}
}
function clear(){
    outputscreen.value="";
}
    function del() {
        outputscreen.value = outputscreen.value.slice(0, -1);
}*/

 