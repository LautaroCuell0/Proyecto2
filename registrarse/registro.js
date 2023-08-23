

 //cramos una clase para crear elementos
 class registro  {
    constructor ( email, usuario, password, repPassword){
       this.email = email;
       this.usuario = usuario;
       this.password = password;
       this.repPassword = repPassword
    }
}

//array de objetos crados a partir de la clase registro
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
       
   ];


function guardarUsuariosEnLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

//subo los nuevos elementos al array
function registrarse (event){
   event.preventDefault()
    let email = document.getElementById('email').value;
    let usuario = document.getElementById('user').value
    let password = document.getElementById('password').value;
    let repPassword = document.getElementById('rep-password').value
    usuarios.push(new registro (email,usuario, password, repPassword))
    guardarUsuariosEnLocalStorage()
    document.querySelector('form').reset()
   //  window.location.assign(window.location.origin + '/index.html')
}

console.log(usuarios)


