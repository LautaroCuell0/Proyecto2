class Usuario{
    constructor(email, contraseña){
        this.email = email;
        this.contraseña = contraseña;
    }
}

const usuarios =  JSON.parse(localStorage.getItem('usuarios')) || [
    new Usuario("pucharra81@gmail.com", '1234'),
    new Usuario("puchar@gmail.com", '123'),
    new Usuario('lautaro@gmail.com', '123456')
]

function guardarUsuariosEnLocalStorage() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

 function iniciarSesion(event){
     event.preventDefault();
     const email = document.getElementById("email").value;
     const contraseña = document.getElementById("password").value;
     const buscarUsuario = usuarios?.foreach(user => user.email == email);
     if(buscarUsuario){
         const contraCorrecta = buscarUsuario.contraseña == contraseña;
         if(contraCorrecta){
             alert("constrasenia correcta")
             window.location.assign(window.location.origin + '/index.html')
         }
         else{
             alert("constrasenia incorrecta")
         }
     } else {
         alert('usuario incorrecto')
     }
     document.querySelector('form').reset()
 }
