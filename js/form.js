
var botonGenerarCurriculum = document.querySelector("#generar-curriculum");

botonGenerarCurriculum.addEventListener("click", function (evento) {
   evento.preventDefault();

   var form = document.querySelector("#form-curriculum");
   var usuario = capturarDatosUsuario(form);

   console.log(usuario);
});

function capturarDatosUsuario(form) {

   var usuario = {
      nombre : form.nombre.value,
      apellido : form.apellido.value,
      edad : form.edad.value,
      descripcion : form.descripcion.value,
      telefono : form.telefono.value,
      email : form.email.value
   }

   return usuario;
}