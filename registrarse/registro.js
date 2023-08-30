 //cramos una clase para crear elementos
 class registro  {
    constructor (id, email, password, repPassword, isAdmin){
       this.id= id;
       this.email = email;
       this.password = password;
       this.repPassword = repPassword
       this.isAdmin =  isAdmin || false
    }
}


const adminUser = new registro(
    Date.now(), // ID único
    "lautaro@gmail.com",
    "123",
    "123",
    true // Es administrador
);

//array de objetos crados a partir de la clase registro
let usuario = JSON.parse(localStorage.getItem('usuarios')) || [
    adminUser
];


function guardarUsuariosEnLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuario));
}

//subo los nuevos elementos al array
function registrarse(event){
   event.preventDefault()
    let idUnico = Date.now()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repPassword = document.getElementById('rep-password').value
     if(password!==repPassword){
            
             alert('las contraseñas no coinciden 😯')
             return
         }
    let isUserRegistrado = usuario.find(user=>user.email ===email)
    if(isUserRegistrado){
        return alert('el email ya esta en uso, prueba con otro')
    }
    usuario.push({idUnico:idUnico,email: email, password:password, repPassword:repPassword, isAdmin: false})
    guardarUsuariosEnLocalStorage()
    alert('registro exitoso, BIENVENIDO 😁')
    console.log(usuario)
    
    document.querySelector('form').reset()
    
     window.location.assign(window.location.origin + '/iniciarSesion/iniciar.html')
}



function iniciarSesion(event){
    event.preventDefault();
    const email = document.getElementById("datoInciarSesion").value;
    const contraseña = document.getElementById("contraseñaIniciarSesion").value;
    // Elimina la declaración let usuarios de aquí
    let validUsers = usuario.find(user => user.email === email && user.password === contraseña);
    if(!validUsers){
         return alert('informacion erronea');
    }
    if (validUsers.isAdmin) {
        alert(`¡Bienvenido Admin ${validUsers.email}! 🤠`);
        // Redirige a la sección especial para administradores
        window.location.assign(window.location.origin + '/Crud/crud.html');
    } else {
        alert(`¡Bienvenido ${validUsers.email}!`);
        // Redirige a la página principal
        window.location.assign(window.location.origin + '/index.html');
    }

 }
 





