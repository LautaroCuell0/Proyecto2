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
 
           <button class="button-fav" onclick='agregarFav(idunico)'><i class="fa-solid fa-heart"></i></i></button>
       </div>
   </div>
    </div>
        `
      //buscamos al padre en el html
      const padreContainer = document.querySelector(".tarjetasmain");
      padreContainer.appendChild(newcardmain);
    });
  }

  