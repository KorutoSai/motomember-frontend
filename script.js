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
        window.location.href="https://youtu.be/dQw4w9WgXcQ?si=-YaZRPRIdjkmQsyw";
        return false;
    }

    else {
        alert("Password is 'tite', login failed");

    }


}


