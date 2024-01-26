
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
    

    if (password.value === "tite") {
       alert("Login Successful");
        window.location.href="member-request.html";
        return false;
    }

    else {
        alert("Password is 'tite', login failed");

    }


}



