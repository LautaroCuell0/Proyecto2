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

  
  function rendersongs() {
    const padreContainer = document.querySelector(".tarjetasmain");
    padreContainer.innerHTML = "";
    songList.forEach((song) => {
      //crear el elemento
  
      const newcardmain = document.createElement("div");
      newcardmain.id = song.idunico;
        //le agregamos la inoformacion
        newcardmain.classList.add('cover-card');
        newcardmain.innerHTML = `
        <div class="cover-card" id="main">
        <div class="card">
        <div class="h1-info"><h1>${song.nombre}</h1></div>     
       <div class="cover-info">
       <div class="img-card"><img src="${song.imagen}" alt=""></div>
       <div class="info"> 
           <p>${song.autor}</p>
           <p>${song.duracion}</p>
           <p>${song.categoria}</p>
       </div>
       </div>
       <div class="cover-icons">
 
           <button class="button-fav" onclick="agregarfav(${song.idunico})"><i class="fa-solid fa-heart"></i></i></button>
       </div>
   </div>
    </div>
        `
      //buscamos al padre en el html
      const padreContainer = document.querySelector(".tarjetasmain");
      padreContainer.appendChild(newcardmain);
    });
  }


  let favoritos = [];
const storedFavs = JSON.parse(localStorage.getItem("favoritos"));

if (storedFavs) {
  favoritos = storedFavs;
}
renderFavsInModal();

function agregarfav(idunico){
  let song = songList.find((song) => song.idunico == idunico);
  favoritos.push(song);
  SaveSongFavsToLocalStorage();
  renderFavsInModal();
}

function renderFavsInModal() {
  const favModalContainer = document.querySelector(".tarjetasfav");
  favModalContainer.innerHTML = ""; // Limpiar el contenido anterior del modal

  // Obtener datos de favoritos desde el Local Storage
  const storedFavs = JSON.parse(localStorage.getItem("favoritos"));

  if (storedFavs) {
    storedFavs.forEach((song) => {
      const newCard = document.createElement("div");
      newCard.classList.add("card", "m-2");
      newCard.style.width = "18rem";
      newCard.innerHTML = `
          <img src=${song.imagen} class="card-img-top imagenProducto" alt="...">
          <div class="card-body">
            <h5 class="card-title">${song.nombre}</h5>
            <p class="card-text">${song.autor}</p>
            <span><strong>${song.categoria}</strong></span>
            <br>
            <button class="btn btn-primary my-4"><i class="fa-solid fa-play"></i></button>
            <button class="btn btn-danger my-4" onclick="deleteFav(${song.idunico})">X</button>
          </div>
        `;

      favModalContainer.appendChild(newCard);
    });
  }
}

function SaveSongFavsToLocalStorage() {
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

function deleteFav(idunico) {
  //console.log(idunico)
  const songIndex = favoritos.findIndex((song) => song.idunico == idunico);
  //console.log(songIndex)

  if (songIndex !== -1) {
    favoritos.splice(songIndex, 1);
    SaveSongFavsToLocalStorage();
    renderFavsInModal();
  }
}

  