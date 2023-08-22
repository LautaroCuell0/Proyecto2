class Usuario{
    constructor(id, usuario, email, contraseña){
        this.id = id;
        this.usuario = usuario;
        this.email = email;
        this.contraseña = contraseña;
    }
}

const usuarios = [
    new Usuario(parseInt(Math.random()), "agustinaP", "pucharra81@gmail.com", 1234),
    new Usuario(parseInt(Math.random()), "aguP", "puchar@gmail.com", 123456)

]

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
            alert("entro coreec")
        }
        else{
            alert("datos inco")
        }
    }

    document.querySelector('form').reset()
   
}

