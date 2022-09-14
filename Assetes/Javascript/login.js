import { getAuth } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"
import{signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"
const auth =getAuth()
const Login=()=>{
   let email = document.getElementById("emailForLogin")
   let password = document.getElementById("passwordForLogin")
   signInWithEmailAndPassword(auth, email.value, password.value)
    .then(()=>{
        alert("Welcome to My Web !")
        window.location.href="home.html"
    })
    .catch((err)=>{
        alert("invalid email")
        console.log("error is =" ,err)

    })
}
document.getElementById("login").addEventListener("click" , Login)