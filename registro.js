 //cramos una clase para crear elementos
 class registro  {
     constructor ( gmail, password){
        this.gmail = gmail;
        this.password = password
     }
 }

 //array de objetos crados a partir de la clase registro
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
        new registro ( 'lautaro@gmail.com', '1234'),
        new registro ( 'bbto@gmail.com', '1234')
    ];


 function guardarUsuariosEnLocalStorage() {
     localStorage.setItem('usuarios', JSON.stringify(usuarios));
 }

 //subo los nuevos elementos al array
 function registrarse (event){
    event.preventDefault()
     let email = document.getElementById('email').value;
     let password = document.getElementById('password').value;
     usuarios.push(new registro (email, password))
     guardarUsuariosEnLocalStorage()
     document.querySelector('form').reset()
    //  window.location.assign(window.location.origin + '/index.html')
 }

console.log(usuarios)
