 //cramos una clase para crear elementos
 class registro  {
    constructor (id, email, usuario, password, repPassword){
       this.id= id;
       this.email = email;
       this.usuario = usuario;
       this.password = password;
       this.repPassword = repPassword
    }
}

//array de objetos crados a partir de la clase registro
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [
    new registro(parseInt(Math.random()), "agustinaP", "pucharra81@gmail.com", 1234),
   ];


function guardarUsuariosEnLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

//subo los nuevos elementos al array
function registrarse (event){
   event.preventDefault()
    let idUnico = Date.now()
    let email = document.getElementById('email').value;
    let usuario = document.getElementById('user').value
    let password = document.getElementById('password').value;
    let repPassword = document.getElementById('rep-password').value
    if(password!==repPassword){
        
        alert('las contraseñas no coinciden')
        return
    } 
    usuarios.push()
    guardarUsuariosEnLocalStorage()
    document.querySelector('form').reset()
    console.log(usuarios)
    window.location.assign(window.location.origin + '/index.html')
    alert(`BIENVENIDO 😀`)
}




function iniciarSesion(event){
   event.preventDefault();
   const email = document.getElementById("datoInciarSesion").value;
   const contraseña = document.getElementById("contraseñaIniciarSesion").value;
   console.log(email)
   console.log(contraseña)
   const buscarUsuario = usuarios.find(user => user.email == email);
   if(buscarUsuario){
       const contraCorrecta = buscarUsuario.contraseña == contraseña;
       if(contraCorrecta){
           alert("BIENVENIDO 😀")
           window.location.assign(window.location.origin + '/index.html')
       }
       else{
           alert("datos incorrectos, vuelve a intentar")
       }
   }

   document.querySelector('form').reset()
}



