var rsult=document.getElementById("result");
function display(number){
result.value+=number
}
function calculate(){
    var final_number=result.value;
    var final_result=eval(final_number)
    result.value=final_result;
}
function clrc(){
    result.value=""
}
function DEL(){
    result.value=result.value.slice(0,-1);
}