window.localStorage;

const arregloHabilidades = new Array();
const arregloEducacion = new Array();
const arregloCertificaciones = new Array();

var form = document.querySelector(".form-curriculum");

var checkBoxesEstadoCivil = document.querySelectorAll(".form-check-input");
var estadoCivil;

var fotoPerfil = document.querySelector("#foto");
var srcImagen;

var descripcionPerfil = document.querySelector("#descripcion");
var contadorCaracter = 0;

var botonAgregarHabilidad = document.querySelector("#agregar-habilidad");
var botonAgregarEducacion = document.querySelector("#agregar-educacion");
var botonAgregarCertificacion = document.querySelector("#agregar-certificacion");

var botonGenerarCurriculum = document.querySelector("#boton-generar-curriculum");



/*
var entradas = document.querySelectorAll("input");

var areaTexto = document.querySelector("textarea");

areaTexto.addEventListener("blur", function (evento) {
   var elemento = evento.target;

   if(elemento.validity.valueMissing){
      areaTexto.parentElement.querySelector(".mensaje-error").innerHTML = "Este campo no puede estar vacio";
      areaTexto.style.borderColor = "red";
      console.log(elemento.name);
   }
   else{
      areaTexto.parentElement.querySelector(".mensaje-error").innerHTML = " ";
      areaTexto.style.borderColor = "#dee2e6";
      console.log(elemento.value);
   }
});


entradas.forEach((entrada) => {

   entrada.addEventListener("blur", function (evento) {
      var elemento = evento.target;

      if(elemento.validity.valueMissing){
         entrada.parentElement.querySelector(".mensaje-error").innerHTML = "Este campo no puede estar vacio";
         entrada.style.borderColor = "red";
         console.log(elemento.name);
      }
      else{
         entrada.parentElement.querySelector(".mensaje-error").innerHTML = " ";
         entrada.style.borderColor = "#dee2e6";
         console.log(elemento.value);
      }
   });
});
 */

checkBoxesEstadoCivil.forEach((checkBox) => {

   checkBox.addEventListener("click", function (evento) {
      let valor = checkBox.value;

      if(checkBox.checked){
         estadoCivil = valor;
      }
   });
});


fotoPerfil.addEventListener("change",function (evento) {
   let archivos = evento.target.files;
   let archivo = archivos[0];

   const reader = new FileReader();
   reader.readAsDataURL(archivo);
   reader.onload = (e) => {
      e.preventDefault();
      srcImagen = e.target.result;
      console.log(srcImagen);
   };
});


descripcionPerfil.addEventListener("keydown", function (evento) {

   let cantidadCaracteres = document.querySelector(".numero-caracteres");

   /*
   if (evento.ctrlKey){
      if (evento.keyCode === 86) {
         console.log("ctrl v");
      }
   }
    */

   if((evento.keyCode >= 65 && evento.keyCode <= 90) || (evento.keyCode === 32)){
      contadorCaracter++;

      if(contadorCaracter <= 600){
         cantidadCaracteres.innerHTML = contadorCaracter;
      }
   }

   //console.log(evento.key);
   //console.log(evento.keyCode);
   //console.log(contador);

});


botonAgregarHabilidad.addEventListener("click",function (evento) {
   evento.preventDefault();

   let habilidad = document.getElementById("habilidad").value;

   agregarElementosAlArreglo(habilidad,"h");

   manipularListadoEnHTML(habilidad,"h");

});


function obtenerHabilidades(){
   return arregloHabilidades;
}


botonAgregarEducacion.addEventListener("click",function (evento) {
   evento.preventDefault();

   let educacion = document.getElementById("educacion").value;

   agregarElementosAlArreglo(educacion,"e");

   manipularListadoEnHTML(educacion,"e");

});


function obtenerEducacion(){
   return arregloEducacion;
}


botonAgregarCertificacion.addEventListener("click",function (evento) {
   evento.preventDefault();

   let certificacion = document.getElementById("certificacion").value;

   agregarElementosAlArreglo(certificacion,"c");

   manipularListadoEnHTML(certificacion,"c");
});


function obtenerCertificaciones(){
   return arregloCertificaciones;
}

function agregarElementosAlArreglo(valor,tipo) {

   if(tipo === 'h'){
      arregloHabilidades.push(valor);
   }
   else if(tipo === 'e'){
      arregloEducacion.push(valor);
   }
   else if (tipo === 'c'){
      arregloCertificaciones.push(valor);
   }
}


function manipularListadoEnHTML(valor,tipo) {
   let arregloLi;
   let lista;

   let li = document.createElement('li');
   let p = document.createElement('p');
   let boton = document.createElement('button');

   if(tipo === 'h'){
      lista = document.querySelector('.listado-habilidades');
      arregloLi = obtenerHabilidades();
   }
   else if(tipo === 'e'){
      lista = document.querySelector('.listado-educacion');
      arregloLi = obtenerEducacion();
   }
   else if (tipo === 'c'){
      lista = document.querySelector('.listado-certificaciones');
      arregloLi = obtenerCertificaciones();
   }


   li.classList.add('elemento-li');

   p.textContent = valor;

   boton.type = "button";
   boton.classList.add('btn-close');

   li.appendChild(p);
   li.appendChild(boton);
   lista.appendChild(li);


   //ELIMINAR ELEMENTO AL PRESIONAR EL BOTON X
   boton.addEventListener("click", function (evento) {
      evento.preventDefault();

      lista.removeChild(li);

      for(let i=0;i<arregloLi.length;i++){
         if(valor === arregloLi[i]){
            arregloLi.splice(i,1);
         }
      }
   });
}


botonGenerarCurriculum.addEventListener("click", function (evento) {
   evento.preventDefault();

   let usuario = capturarDatosUsuario();

   cambiarBoton();

   guardarDatosEnLocalStorage(usuario);

   form.reset();
});


function capturarDatosUsuario() {

   let usuario = {
      nombre : form.nombre.value,
      apellido : form.apellido.value,
      edad : form.edad.value,
      estado_civil: estadoCivil,
      foto : srcImagen,
      descripcion : form.descripcion.value,
      telefono : form.telefono.value,
      email : form.email.value,
      linkedin : form.linkedin.value,
      habilidades : obtenerHabilidades(),
      educacion : obtenerEducacion(),
      certificaciones : obtenerCertificaciones()
   }

   return usuario;
}

function cambiarBoton() {
   let boton = document.querySelector('#boton-generar-curriculum');
   boton.style.backgroundColor = 'green';
   boton.textContent = 'Curriculum generado!!!';
}


function guardarDatosEnLocalStorage(usuario) {
   localStorage.setItem('nombre',usuario.nombre);
   localStorage.setItem('apellido',usuario.apellido);
   localStorage.setItem('edad',usuario.edad);
   localStorage.setItem('estado civil',usuario.estado_civil);
   localStorage.setItem('foto',usuario.foto);
   localStorage.setItem('descripcion',usuario.descripcion);
   localStorage.setItem('telefono',usuario.telefono);
   localStorage.setItem('email',usuario.email);
   localStorage.setItem('linkedin',usuario.linkedin);


   guardarHabilidadesEnLocalStorage(usuario);
   guardarEducacionEnLocalStorage(usuario);
   guardarCertificacionesEnLocalStorage(usuario);
}

function guardarHabilidadesEnLocalStorage(usuario){
   let cantidadHabilidades = usuario.habilidades.length;

   for (let i=0;i<cantidadHabilidades;i++){
      localStorage.setItem('habilidad #'+i, usuario.habilidades[i])
   }
   localStorage.setItem('cantidadH',cantidadHabilidades);
}

function guardarEducacionEnLocalStorage(usuario){
   let cantidadEducacion = usuario.educacion.length;

   for (let i=0;i<cantidadEducacion;i++){
      localStorage.setItem('educacion #'+i, usuario.educacion[i])
   }
   localStorage.setItem('cantidadE',cantidadEducacion);
}

function guardarCertificacionesEnLocalStorage(usuario){
   let cantidadCertificaciones = usuario.certificaciones.length;

   for (let i=0;i<cantidadCertificaciones;i++){
      localStorage.setItem('certificacion #'+i, usuario.certificaciones[i])
   }
   localStorage.setItem('cantidadC',cantidadCertificaciones);
}
