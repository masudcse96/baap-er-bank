document.getElementById("login-submit").addEventListener("click",function(){
    //Email value
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    //password value
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    //condition
  if(userEmail == "sontan@gmail.com" && userPassword =="secret"){
      window.location.href = "banking.html";
  }
    
})

//handle deposit button event
