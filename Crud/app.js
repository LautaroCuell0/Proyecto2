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
      "categoria",
      "3:29",
      "3524",
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/9f/e4/4b/9fe44b3f-0138-8301-1a13-ae9cc7409571/197187668199.jpg/1200x1200bf-60.jpg"
    ),
    new song(
      "Nombre",
      "Autor",
      "categoria",
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
  
  //AGREGAR CANCIONES POR PROMPT
  /* function addSong(){
      let nombre=prompt("Ingrese el nombre de la cancion:")
      let autor=prompt("Ingrese el autor de la cancion:")
      let categoria=prompt("Ingrese la categoria:")
      let duracion=prompt("Ingrese la duracion:")
      let idunico=Date.now()
      let imagen=prompt("Ingrese la url de la portada del album:")
  
      let newsong={nombre,autor,categoria,duracion,idunico,imagen}
      songList.push(newsong)
      rendersongs()
  
  } */
  
  function rendersongs() {
    // const padreContainer = document.querySelector(".contenido");
    // padreContainer.innerText = "";
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


  function allSongs() {
    songList.forEach((song) => {
      let newCard = document.createElement('div')
      newCard.id = song.idunico;
      newCard.classList.add('cover-card')
      newCard.style.width = '100%';
      newCard.style.height = '40px';
      newCard.innerHTML = `
              <div class="cover-card" id="main">
              <div class="card">
                  <div class="img-card"><img src="${songList.imagen}" alt=""></div>
                  <div class="cover-icons">
                      <a href="/ERROR-404/error404.html"><button class="button-fav"><i class="fa-solid fa-play"></i></i></button></a>
                      <button class="button-fav"><i class="fa-solid fa-heart"></i></i></button>
                  </div>
              </div>
              </div>
              `
      let padreCard = document.querySelector('.creadorCard')
      padreCard.appendChild(newCard)
    }
    )
  }
  allSongs()
  let canciones = JSON.parse(localStorage.getItem('songList'))||[
        
  ]

  function renderCards(){
    storedSongList?.forEach(cards =>{
    console.log('entro')
    let newCard = document.createElement('div')
         newCard.id = song.idunico;
         newCard.classList.add('cover-card')
         newCard.style.width = '100%';
         newCard.style.height = '40px';
         newCard.innerHTML = `
         <div class="cover-card" id="main">
         <div class="card">
             <div class="img-card"><img src="${songList.imagen}" alt=""></div>
             <div class="cover-icons">
      
                 <a href="/ERROR-404/error404.html"><button class="button-fav"><i class="fa-solid fa-play"></i></i></button></a>
                 <button class="button-fav"><i class="fa-solid fa-heart"></i></i></button>
             </div>
         </div>
         </div> 
         `
       let padreCard = document.querySelector('.creadorCard')
       padreCard.appendChild(newCard)
     })
    
    }
    renderCards()
     
  
      
  
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