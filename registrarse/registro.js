//cramos una clase para crear elementos
 class registro  {
     constructor (id, email, user, password){
        this.id = parseInt(Math.random()*100)
        this.email = email;
        this.user = user;
        this.password = password
     }
 }

let usuarioArray = [
    new registro ( 'lautaro@gmail.com', 'lautaro', '123'),
    new registro ( 'bbto@gmail.com','bbto', '1234')
]
 //array de objetos crados a partir de la clase registro
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
        new registro ( 'lautaro@gmail.com', 'lautaro', '123'),
        new registro ( 'bbto@gmail.com','bbto', '1234')
    ];


 function guardarUsuariosEnLocalStorage() {
     localStorage.setItem('usuarios', JSON.stringify(usuarios));
 }

 //subo los nuevos elementos al array
 function registrarse (event){
    event.preventDefault()
     let email = document.getElementById('email').value;
     let user = document.getElementById('user').value;
     let password = document.getElementById('password').value;
     let repassword = document.getElementById('repetirPassword').value
     if(password !== repassword){
        alert('las contraseñas no coinciden')
     } 
     usuarios.push(new registro ( email,user,password,repassword))
     guardarUsuariosEnLocalStorage()
     document.querySelector('form').reset()
    //  window.location.assign(window.location.origin + '/index.html')
 }

console.log(usuarios)

