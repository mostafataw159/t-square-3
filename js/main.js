
function validate(){
var result = document.getElementById("result");

var user = document.getElementById("user").value;
var email = document.getElementById("email").value;
var pass = document.getElementById("pass").value;
var confirm = document.getElementById("confirm-pass").value;


//style
result.setAttribute("class","text-center p-2 alert alert-warning mt-3");
result.style.transition = "all .4s linear";
//style

if(user =="" && email=="" && pass =="" && confirm ==""){
result.innerHTML ="please enter you data first.";
return false;
}
else if(user.length<8 || user.length>16){
    result.innerHTML ="enter from 8 letters to 16 to access.";
    return false;
}
else if(email.indexOf("@")==-1){
result.innerHTML ="there is somthing wrong with your email.";
return false;
}
else if(pass.length <9){
result.innerHTML ="you must enter the password it must be under 11 letters.";
return false;
}
else if(confirm != pass){
result.innerHTML= "password is not matching."
return false;
}
else{
    return true;
}
}

