window.localStorage;

const arrayHabilidades = new Array();
const arrayEstudios = new Array();
const arrayCertificaciones = new Array();


var botonAgregarHabilidad = document.querySelector("#agregar-habilidad");
var checkBoxesEstudio = document.querySelectorAll(".form-check-input");
var botonAgregarCertificacion = document.querySelector("#agregar-certificacion");
var botonGenerarCurriculum = document.querySelector("#generar-curriculum");


botonAgregarHabilidad.addEventListener("click",function (evento) {
   evento.preventDefault();

   var habilidad = document.getElementById("habilidad").value;
   agregarHabilidades(habilidad);

   //var habilidades = getHabilidades();

   //console.log(habilidades);
   //alert("Habilidad agregada");
});

function agregarHabilidades(habilidad) {
   arrayHabilidades.push(habilidad);
}

function getHabilidades(){
   return arrayHabilidades;
}



checkBoxesEstudio.forEach((checkBox) => {

   checkBox.addEventListener("click", function (evento) {
      var valor = checkBox.value;

      if(checkBox.checked){
         //console.log(valor);
         agregarEstudio(valor);
      }
      else{
         //console.log("Desmarcado " + valor);
         eliminarEstudio(valor);
      }
   });
});

function agregarEstudio(estudio) {
   arrayEstudios.push(estudio);
   //console.log(getEstudios());
}

function eliminarEstudio(estudio) {
   var i = arrayEstudios.findIndex(e => e === estudio);
   arrayEstudios.splice(i,1);
   //console.log(getEstudios());
}

function getEstudios() {
   return arrayEstudios;
}



botonAgregarCertificacion.addEventListener("click",function (evento) {
   evento.preventDefault();

   var certificacion = document.getElementById("certificacion").value;

   agregarCertificaciones(certificacion);

   //var certificaciones = getCertificaciones();
   //console.log(certificaciones);
   //alert("Certificacion agregada");
});

function agregarCertificaciones(certificacion) {
   arrayCertificaciones.push(certificacion);
}

function getCertificaciones(){
   return arrayCertificaciones;
}




botonGenerarCurriculum.addEventListener("click", function (evento) {
   evento.preventDefault();

   var form = document.querySelector("#form-curriculum");
   var usuario = capturarDatosUsuario(form);

   guardarDatosEnLocalStorage(usuario);

   cambiarBoton();

   form.reset();

   console.log(usuario);
});

function cambiarBoton() {
   var boton = document.querySelector('#generar-curriculum');
   boton.style.backgroundColor = 'green';
   boton.textContent = 'Curriculum generado!!!'
}

function capturarDatosUsuario(form) {

   var usuario = {
      nombre : form.nombre.value,
      apellido : form.apellido.value,
      edad : form.edad.value,
      descripcion : form.descripcion.value,
      telefono : form.telefono.value,
      email : form.email.value,
      habilidades : getHabilidades(),
      estudios : getEstudios(),
      certificaciones : getCertificaciones()
   }

   return usuario;
}

function guardarDatosEnLocalStorage(usuario) {
   localStorage.setItem('nombre',usuario.nombre);
   localStorage.setItem('apellido',usuario.apellido);
   localStorage.setItem('edad',usuario.edad);
   localStorage.setItem('descripcion',usuario.descripcion);
   localStorage.setItem('telefono',usuario.telefono);
   localStorage.setItem('email',usuario.email);

   guardarHabilidadesEnLocalStorage(usuario);
   guardarEstudiosEnLocalStorage(usuario);
   guardarCertificacionesEnLocalStorage(usuario);
}

function guardarHabilidadesEnLocalStorage(usuario){
   var cantidadHabilidades = usuario.habilidades.length;

   for (let i=0;i<cantidadHabilidades;i++){
      localStorage.setItem('habilidad #'+i, usuario.habilidades[i])
   }
   localStorage.setItem('cantidadH',cantidadHabilidades);
}


function guardarEstudiosEnLocalStorage(usuario){
   var cantidadEstudios = usuario.estudios.length;


   for (let i=0;i<cantidadEstudios;i++){
      localStorage.setItem('estudio #'+i, usuario.estudios[i])
   }
   localStorage.setItem('cantidadE',cantidadEstudios);
}


function guardarCertificacionesEnLocalStorage(usuario){
   var cantidadCertificaciones = usuario.certificaciones.length;


   for (let i=0;i<cantidadCertificaciones;i++){
      localStorage.setItem('certificacion #'+i, usuario.certificaciones[i])
   }
   localStorage.setItem('cantidadC',cantidadCertificaciones);
}