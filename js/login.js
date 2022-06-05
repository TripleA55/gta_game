import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"


let botonlogin=document.getElementById("register-btn")
botonlogin.addEventListener("click",function(evento){
    evento.preventDefault()

   //recibir el correo y contraseña
   let email=document.getElementById("Re-email").value
   let password=document.getElementById("Re-password").value

   //activar la rutina de login fb
   const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href="index.html"
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

})