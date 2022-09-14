import { getAuth} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"
import{createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js"
const auth=getAuth();
// const abc=getApp()
const Register=()=>{
    let name=document.getElementById("name")
    console.log(name.value)
    let email=document.getElementById("email")
    console.log(email.value)
    let password=document.getElementById("password")
    console.log(password.value)
    console.log(name.value,email.value,password.value)
    // createUserWithEmailAndPassword(1,2,3)
    createUserWithEmailAndPassword(auth,email.value,password.value)
    .then(()=>{ 
        alert("new user is registered")
        window.location.href="login.html"
        
    })
    .catch((err)=>{
        alert("Incorrect Email" , err)
    })
}

document.getElementById("register").addEventListener('click',Register)
