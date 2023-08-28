class song {
    constructor(nombre, autor, album, duracion,idunico,imagen){
        this.nombre = nombre;
        this.autor = autor;
        this.album = album;
        this.duracion = duracion;
        this.idunico = idunico;
        this.imagen = imagen;
    }
}

let songList= [
    new song("Nombre", "Autor", "Album","3:29","3524","https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/e4/4b/9fe44b3f-0138-8301-1a13-ae9cc7409571/197187668199.jpg/1200x1200bf-60.jpg"),
    new song("Nombre","Autor","Disco","10:00","12345","https://yt3.googleusercontent.com/csT1zuQU13zkLlGx0rfeBNiemt4BnzRW1tujMd9OfzOnC2LxDHtVvw8rODkaC16i8Ngyq-uenuwK=s576")
];
rendersongs();
function addSong(){
    let nombre=prompt("Ingrese el nombre de la cancion:")
    let autor=prompt("Ingrese el autor de la cancion:")
    let album=prompt("Ingrese el Nombre del album:")
    let duracion=prompt("Ingrese la duracion:")
    let idunico=Date.now()
    let imagen=prompt("Ingrese la url de la portada del album:")

    let newsong={nombre,autor,album,duracion,idunico,imagen}
    songList.push(newsong)
    rendersongs()

    console.log(songList)

}
function rendersongs(){

    const padreContainer = document.querySelector('.contenido');
    padreContainer.innerHTML = '';
    songList.forEach(
        song => {
            //crear el elemento
    
            const newsongcard = document.createElement('div')
            newsongcard.id = song.idunico;
            //le agregamos la inoformacion
            newsongcard.classList.add("contenedor");
            newsongcard.style.width='100%';
            newsongcard.style.height="10rem";
            newsongcard.innerHTML = `
           
            <div class="caja"><img src=${song.imagen} class="fotos" alt="Imagen album"></div>
            <div class="caja">  <h5 >${song.nombre}</h5></div>
            <div class="caja">  <h5 >${song.autor}</h5></div>
            <div class="caja">${song.album}</div>
            <div class="caja">  
            <button class="btn btn-primary m-1" onclick="editSong(${song.idunico})">Editar</button>
            <button class="btn btn-danger m-1" onclick="deleteSong(${song.idunico})">Eliminar</button></div>
            `
            //buscamos al padre en el html
            const padreContainer = document.querySelector('.contenido');
            padreContainer.appendChild(newsongcard);
        }
    )
}

function deleteSong(idunico) {
    //console.log(idunico)
    const songIndex = songList.findIndex(song => song.idunico == idunico);
    //console.log(songIndex)

    if (songIndex !== -1) {
        songList.splice(songIndex, 1);
        rendersongs();
    }
}

function editSong(idunico) {
    const songToEdit = songList.find(song => song.idunico == idunico);

        const updatedNombre = prompt("Ingrese el nuevo nombre de la canción:", songToEdit.nombre);
        const updatedAutor = prompt("Ingrese el nuevo autor de la canción:", songToEdit.autor);
        const updatedAlbum = prompt("Ingrese el nuevo nombre del álbum:", songToEdit.album);
        const updatedDuracion = prompt("Ingrese la nueva duración:", songToEdit.duracion);
        const updatedImagen = prompt("Ingrese la nueva URL de la portada del álbum:", songToEdit.imagen);

        songToEdit.nombre = updatedNombre;
        songToEdit.autor = updatedAutor;
        songToEdit.album = updatedAlbum;
        songToEdit.duracion = updatedDuracion;
        songToEdit.imagen = updatedImagen;

        rendersongs();

}