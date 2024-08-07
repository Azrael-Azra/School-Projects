document.addEventListener('DOMContentLoaded', (event) => {
    let showpass = document.getElementById("lock");
    let password = document.getElementById("pass");
  
    showpass.onclick = function() {
      if (password.type == "password") {
        password.type = "text";
        showpass.classList.remove("fa-lock");
        showpass.classList.add("fa-unlock");
      } else {
        password.type = "password";
        showpass.classList.remove("fa-unlock");
        showpass.classList.add("fa-lock");
      }
    }
  });