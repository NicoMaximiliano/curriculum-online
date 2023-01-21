const certificaciones = new Array();
var botonAgregar = document.querySelector("#agregar-certificacion");

botonAgregar.addEventListener("click",function (evento) {
    evento.preventDefault();

    var certificacion = document.getElementById("certificacion").value;

    agregarCertificaciones(certificacion);

    var certificaciones = getCertificaciones();
    console.log(certificaciones);
    //alert("Certificacion agregada");
});

function agregarCertificaciones(certificacion) {
    certificaciones.push(certificacion);
}

function getCertificaciones(){
    return certificaciones;
}