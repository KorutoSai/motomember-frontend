
function myfunction(){
var x =document.getElementById("pass");

if  (x.type === "password")
{
    x.type = "text";

}

else {
    x.type = "password";
}

}

function validate() {
    var password = document.getElementById("pass");
    var lenght = document.getElementById("length")
    

    if (password.value.length >= 3) {
       alert("Login Successful");
        window.location.href="member-request.html";
        return false;
    }

    else {
        alert("Password is  wrong, login failed");

    }


}



