const habilidades = new Array();

var botonAgregar = document.querySelector("#agregar-habilidad");

botonAgregar.addEventListener("click",function (evento) {
    evento.preventDefault();

    var habilidad = document.getElementById("habilidad").value;
    agregarHabilidades(habilidad);

    var habilidades = getHabilidades();

    console.log(habilidades);
    //alert("Habilidad agregada");
});


function agregarHabilidades(habilidad) {
    habilidades.push(habilidad);
}

function getHabilidades(){
    return habilidades;
}

