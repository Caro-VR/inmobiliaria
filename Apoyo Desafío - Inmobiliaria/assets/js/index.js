const propiedades = [
  {
    nombre: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    cuartos: 2,
    metros: 170
  },
    
  {
    nombre: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:"https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    cuartos: 2,
    metros: 130
  },

  {
    nombre: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    cuartos: 1,
    metros: 80
  },

  {
    nombre: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    cuartos: 1,
    metros: 6
  },

  {
    nombre: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:"https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    cuartos: 3,
    metros: 200
  },

  {
    nombre: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    cuartos: 5,
    metros: 500
  }
];

  function cargaGrilla() {
    let grilla = document.querySelector("#grillaPropiedades");

    for(let propiedad of propiedades) {
      grilla.innerHTML += `
        <div class="campo">
            <div class="campo-img" style="background-image: url('${propiedad.src}')"></div>
            <section class="camp">
                <h5>${propiedad.nombre}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${propiedad.cuartos}</p>
                    <p>Metros: ${propiedad.metros}</p>
                </div>
                <p class="my-3">${propiedad.description}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
        </div>
      `
    }
  }

  var buscar = document.getElementById("boton");



  function presionar() {
    let cantidad = document.querySelector("#cantidad");
    let desde = document.querySelector("#desde");
    let hasta = document.querySelector("#hasta");
    let grillaPropiedad = document.querySelector("#grillaPropiedades")
    let total = document.querySelector("#total");

    if (cantidad.value === "" || desde.value === "" || hasta.value === "") {
      alert('Debe ingresar los valores requeridos');
    } else {
      let totalPropiedades = 0;

      for(let propiedad of propiedades) {
        if(parseInt(cantidad.value) === propiedad.cuartos && propiedad.metros >= parseInt(desde.value) && propiedad.metros <= parseInt(hasta.value)){
          grillaPropiedad.innerHTML += `
            <div class="campo">
                <div class="campo-img" style="background-image: url('${propiedad.src}')"></div>
                <section class="camp">
                    <h5>${propiedad.nombre}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${propiedad.cuartos}</p>
                        <p>Metros: ${propiedad.metros}</p>
                    </div>
                    <p class="my-3">${propiedad.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
            </div>
          `
          totalPropiedades ++;
        }
        
      }
      total.innerHTML = totalPropiedades;
    }
  }

  cargaGrilla();

  buscar.addEventListener("click", function(){ presionar()});

