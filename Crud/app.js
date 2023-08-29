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
      newsongcard.classList.add("contenedor");
      newsongcard.style.width = "100%";
      newsongcard.style.height = "10rem";
      newsongcard.innerHTML = `
              <div class="caja"><img src=${song.imagen} class="fotos" alt="Imagen album"></div>
              <div class="caja">  <h5 >${song.nombre}</h5></div>
              <div class="caja">  <h5 >${song.autor}</h5></div>
              <div class="caja">  <h5 >${song.categoria}</h5></div>
              <div class="caja">  <h5 >${song.duracion}</h5></div>
              <div class="caja">  
              <button class="btn btn-primary m-1" onclick="editSong(${song.idunico})">Editar</button>
              <button class="btn btn-danger m-1" onclick="deleteSong(${song.idunico})">Eliminar</button></div>
              `;
      //buscamos al padre en el html
      const padreContainer = document.querySelector(".contenido");
      padreContainer.appendChild(newsongcard);
    });
  }

//se crea la funcion para borrar elementos de la lista
  
    function deleteSong(idunico) {
      const songIndex = songList.findIndex((song) => song.idunico == idunico);
      
      if (songIndex !== -1) {
        const confirmation = confirm("¿Estás seguro de que deseas eliminar esta canción?");
        
        if (confirmation) {
          songList.splice(songIndex, 1);
          rendersongs();
          saveSongListToLocalStorage();
        }
      }
    }
  

  // se crea la funcion para editar los elementos de la lista
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
