  let listaMeses = [
      {
          meses:['•enero', '•febrero', '•marzo', '•abril', '•mayo', '•junio', '•julio', 
          '•agosto', '•septiembre', '•octubre', '•noviembre', '•diciembre'].join('\n'),
        
           listaMonth: function(){
               alert(`los meses son: ${this.meses}`)
          }
      },
   
  ]
  function alertMonth(){
     listaMeses.forEach(listaMeses=>listaMeses.listaMonth())
  }

  function longitudMonth(){
    console.log()
  }
 


  let ciudadesAgr = [];

  function agregarCiudades(){
      let ciudades = prompt('ingresa ciudades').toLocaleLowerCase()
      ciudadesAgr.push(ciudades)
      alert('se agregado al ciudad')

  }

  function mostrarCiudades(){
      alert(`las ciudades agregadas son: ${ciudadesAgr.join('\n')}`)
  }