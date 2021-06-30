const socket = io('http://localhost:3000');
window.onload=function(){
    const Login = document.getElementById('Login');
    const Signup = document.getElementById('Signup');
    const User = document.getElementById('Username');
    const Password = document.getElementById('password');
    const User2 = document.getElementById('Signup-Username');
    const Password2 = document.getElementById('Signup-password');
    const Email2 = document.getElementById('Signup-Email');
    Login.addEventListener('submit',e => {
        e.preventDefault();
        const user=User.value;
        const password=Password.value;
    })
    Signup.addEventListener('submit',e=>{
        e.preventDefault();
        const user=User2.value;
        const password=Password2.value;
        const email=Email2.value;
    })
}