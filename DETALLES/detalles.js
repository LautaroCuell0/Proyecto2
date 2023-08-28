class detallesCanciones{
    constructor(cancion,artista,duracion,categoria,portada,idUnico){
        this.cancion = cancion;
        this.artista = artista;
        this.duracion = duracion;
        this.categoria = categoria;
        this.portada =  portada;
        this.idUnico = idUnico;
    }
}

let cancion = [
    new detallesCanciones('ARE WE STILL FRIENDS?','Tyler, the creator', '4:25', 'Rap','https://upload.wikimedia.org/wikipedia/en/5/51/Igor_-_Tyler%2C_the_Creator.jpg',1),
    new detallesCanciones("I Am a God","Kanye West","3:51","Rap","https://indiehoy.com/wp-content/uploads/2013/07/kanye-west-yeezus.jpg",2)
]

    cancion.forEach(
        canciones => {
            const cancionesDetalles = document.createElement('div')
            cancionesDetalles.id = canciones.idUnico
            cancionesDetalles.innerHTML = `
            <div>
        <div class="div-img-detalles">
            <img src=${canciones.portada} alt="Imagen de un album" class="img-detalles">
        </div>
        <div class="text-center">
            <h3 class="mb-2">
                ${canciones.cancion}
            </h3>
            <h5 class="texto-detalle mb-2">
                ${canciones.artista}
            </h5>
            <h6 class="mb-4">
                Duración: ${canciones.duracion}
            </h6>
            <h3 class="texto-detalle">
                Categoria: ${canciones.categoria}
            </h3>
        </div>
    </div>`
        const padreDetalles = document.querySelector('main')
        padreDetalles.appendChild(cancionesDetalles)
        }
)


