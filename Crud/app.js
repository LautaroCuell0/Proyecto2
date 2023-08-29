class song {
  constructor(nombre, autor, categoria, duracion, idunico, imagen) {
    this.nombre = nombre;
    this.autor = autor;
    this.categoria = categoria;
    this.duracion = duracion;
    this.idunico = idunico;
    this.imagen = imagen;
  }
}

let songList = [
  new song(
    "Nombre",
    "Autor",
    "Categoria",
    "3:29",
    "3524",
    "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/e4/4b/9fe44b3f-0138-8301-1a13-ae9cc7409571/197187668199.jpg/1200x1200bf-60.jpg"
  ),
  new song(
    "Noviembre sin ti",
    "Luis Fonsi",
    "Romance",
    "10:00",
    "12345",
    "https://yt3.googleusercontent.com/csT1zuQU13zkLlGx0rfeBNiemt4BnzRW1tujMd9OfzOnC2LxDHtVvw8rODkaC16i8Ngyq-uenuwK=s576"
  ),
];
rendersongs();

const storedSongList = JSON.parse(localStorage.getItem('songList'));

if (storedSongList) {
    songList = storedSongList;
    rendersongs(); // Volver a renderizar la lista desde Local Storage
}


function rendersongs() {
   const padreContainer = document.querySelector(".contenido");
   padreContainer.innerText = "";
  songList.forEach((song) => {
    //crear el elemento

    const newsongcard = document.createElement("div");
    newsongcard.id = song.idunico;
    //le agregamos la inoformacion
    newsongcard.classList.add("contenedor", "mt-2");
    newsongcard.style.width = "100%";
    newsongcard.style.height = "15vh";
    newsongcard.innerHTML = `
            <div class="caja"><img src=${song.imagen} class="fotos" alt="Imagen album"></div>
            <div class="caja">  <h5 class="fuenteDivCrud">${song.nombre}</h5></div>
            <div class="caja">  <h5 class="fuenteDivCrud">${song.autor}</h5></div>
            <div class="caja">  <h5 class="fuenteDivCrud">${song.categoria}</h5></div>
            <div class="caja">  <h5 class="fuenteDivCrud">${song.duracion}</h5></div>
            <div class="caja">  
            <div class="d-flex flex-direction-row">
            <button class="btn btn-primary m-1 botonEdiYEli" onclick="editSong(${song.idunico})"><i class="fa-regular fa-pen-to-square"></i></button>
            <button class="btn btn-danger m-1 botonEdiYEli" onclick="deleteSong(${song.idunico})"><i class="fa-regular fa-trash-can"></i></button>
            </div>
            </div>
            
           
            `;
    //buscamos al padre en el html
    const padreContainer = document.querySelector(".contenido");
    padreContainer.appendChild(newsongcard);
  });
}


   

    

function deleteSong(idunico) {
  //console.log(idunico)
  const songIndex = songList.findIndex((song) => song.idunico == idunico);
  //console.log(songIndex)

  if (songIndex !== -1) {
    songList.splice(songIndex, 1);
    rendersongs();
    saveSongListToLocalStorage();
  }
}

function editSong(idunico) {
  const songToEdit = songList.find((song) => song.idunico == idunico);

  const updatedNombre = prompt(
    "Ingrese el nuevo nombre de la canción:",
    songToEdit.nombre
  );
  const updatedAutor = prompt(
    "Ingrese el nuevo autor de la canción:",
    songToEdit.autor
  );
  const updatedCategoria = prompt(
    "Ingrese la nueva categoria:",
    songToEdit.categoria
  );
  const updatedDuracion = prompt(
    "Ingrese la nueva duración:",
    songToEdit.duracion
  );
  const updatedImagen = prompt(
    "Ingrese la nueva URL de la portada del álbum:",
    songToEdit.imagen
  );

  songToEdit.nombre = updatedNombre;
  songToEdit.autor = updatedAutor;
  songToEdit.categoria = updatedCategoria;
  songToEdit.duracion = updatedDuracion;
  songToEdit.imagen = updatedImagen;

  rendersongs();
  saveSongListToLocalStorage();
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addSongForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const autor = document.getElementById("autor").value;
      const categoria = document.getElementById("categoria").value;
      const duracion = document.getElementById("duracion").value;
      const imagen = document.getElementById("imagen").value;

      const idunico = Date.now();

      const newsong = { nombre, autor, categoria, duracion, imagen, idunico };
      songList.push(newsong);
      rendersongs();
      saveSongListToLocalStorage();
      // Limpia los campos del formulario
      document.getElementById("nombre").value = "";
      document.getElementById("autor").value = "";
      document.getElementById("categoria").value = "";
      document.getElementById("duracion").value = "";
      document.getElementById("imagen").value = "";

      modal.hide();
    });
});

function saveSongListToLocalStorage() {
  localStorage.setItem("songList", JSON.stringify(songList));
}