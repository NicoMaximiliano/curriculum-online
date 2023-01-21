const estudios = new Array();
var checkBoxesEstudio = document.querySelectorAll(".form-check-input");

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
   estudios.push(estudio);

   //console.log(getEstudios());
}

function eliminarEstudio(estudio) {
   var i = estudios.findIndex(e => e === estudio);
   estudios.splice(i,1);

   //console.log(getEstudios());
}

function getEstudios() {
   return estudios;
}