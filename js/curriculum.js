
var descripcion = localStorage.getItem('descripcion');
var nombre = localStorage.getItem('nombre');
var apellido = localStorage.getItem('apellido');
var edad = localStorage.getItem('edad');
var telefono = localStorage.getItem('telefono');
var email = localStorage.getItem('email');


document.querySelector('.titulo-nombre').innerHTML = nombre + " " + apellido;
document.querySelector('.descripcion').innerHTML = descripcion;
document.querySelector('.nombre').innerHTML = nombre + " " + apellido;
document.querySelector('.edad').innerHTML = edad;
document.querySelector('.telefono').innerHTML = telefono;
document.querySelector('.email').innerHTML = email;

obtenerHabilidades();
obtenerEstudios();
obtenerCertificaciones();

function obtenerHabilidades() {
    var cantidad = localStorage.getItem('cantidadH');

    for(let i=0;i<cantidad;i++){
        var habilidad = localStorage.getItem('habilidad #'+i);
        agregarHabilidadElementoLi(habilidad);
    }
}

function agregarHabilidadElementoLi(habilidad) {
    var listaH = document.querySelector('.lista-habilidades');

    var li = document.createElement('li');
    var p = document.createElement('p');

    listaH.appendChild(li);
    li.appendChild(p);

    p.textContent = habilidad;
}

function obtenerEstudios() {
    var cantidad = localStorage.getItem('cantidadE');

    for(let i=0;i<cantidad;i++){
        var estudio = localStorage.getItem('estudio #'+i);
        agregarEstudioElementoLi(estudio);
    }
}

function agregarEstudioElementoLi(estudio) {
    var listaE = document.querySelector('.lista-estudios');

    var li = document.createElement('li');
    var p = document.createElement('p');

    listaE.appendChild(li);
    li.appendChild(p);

    p.textContent = estudio;
}

function obtenerCertificaciones() {
    var cantidad = localStorage.getItem('cantidadC');

    for(let i=0;i<cantidad;i++){
        var certificacion = localStorage.getItem('certificacion #'+i);
        //document.querySelector('#parrafo'+i).innerHTML = habilidad;
        agregarCertificacionElementoLi(certificacion);
    }
}

function agregarCertificacionElementoLi(certificacion) {
    var listaC = document.querySelector('.lista-certificaciones');

    var li = document.createElement('li');
    var p = document.createElement('p');

    listaC.appendChild(li);
    li.appendChild(p);

    p.textContent = certificacion;
}


localStorage.clear();