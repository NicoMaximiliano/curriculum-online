
var botonImprimir = document.querySelector("#boton-imprimir");
var botonVolver = document.querySelector("#boton-volver");

var nombre = localStorage.getItem('nombre');
var apellido = localStorage.getItem('apellido');
var edad = localStorage.getItem('edad');
var estado_civil = localStorage.getItem('estado civil');
var fotoPerfil = localStorage.getItem('foto');
var descripcion = localStorage.getItem('descripcion');
var telefono = localStorage.getItem('telefono');
var email = localStorage.getItem('email');
var linkedin = localStorage.getItem('linkedin');

cargarDatosPersonales();
obtenerHabilidades();
obtenerEducacion();
obtenerCertificaciones();


function cargarDatosPersonales() {
    document.querySelector('.titulo-nombre').innerHTML = nombre + " " + apellido;
    document.querySelector('#edad').innerHTML = edad;
    document.querySelector('#estado-civil').innerHTML = estado_civil;
    document.querySelector(".foto-perfil").src = fotoPerfil;
    document.querySelector('.descripcion').innerHTML = descripcion;
    document.querySelector('#telefono').innerHTML = telefono;
    document.querySelector('#email').innerHTML = email;
    document.querySelector('#linkedin').innerHTML = linkedin;
}

function obtenerHabilidades() {
    let cantidad = localStorage.getItem('cantidadH');

    for(let i=0;i<cantidad;i++){
        let habilidad = localStorage.getItem('habilidad #'+i);
        agregarHabilidadEnElementoLi(habilidad);
    }
}

function agregarHabilidadEnElementoLi(habilidad) {
    let listaH = document.querySelector('.lista-habilidades');

    let li = document.createElement('li');
    let p = document.createElement('p');

    p.classList.add("form-p");

    listaH.appendChild(li);
    li.appendChild(p);

    p.textContent = habilidad;
}

function obtenerEducacion() {
    let cantidad = localStorage.getItem('cantidadE');

    for(let i=0;i<cantidad;i++){
        let educacion = localStorage.getItem('educacion #'+i);
        agregarEducacionEnElementoLi(educacion);
    }
}

function agregarEducacionEnElementoLi(educacion) {
    let listaI = document.querySelector('.listado-educacion');

    let li = document.createElement('li');
    let p = document.createElement('p');

    p.classList.add("form-p");

    listaI.appendChild(li);
    li.appendChild(p);

    p.textContent = educacion;
}

function obtenerCertificaciones() {
    let cantidad = localStorage.getItem('cantidadC');

    for(let i=0;i<cantidad;i++){
        let certificacion = localStorage.getItem('certificacion #'+i);
        agregarCertificacionEnElementoLi(certificacion);
    }
}

function agregarCertificacionEnElementoLi(certificacion) {
    let listaC = document.querySelector('.lista-certificaciones');

    let li = document.createElement('li');
    let p = document.createElement('p');

    p.classList.add("form-p");

    listaC.appendChild(li);
    li.appendChild(p);

    p.textContent = certificacion;
}

botonImprimir.addEventListener("click", function (evento) {
   evento.preventDefault();

   let header = document.querySelector(".cabecera-curriculum");
   let form = document.querySelector(".form-curriculum");

   let estilo = 'body{\n' +
       '    font-family: \'Quicksand\', sans-serif;\n' +
       '    background-color: #d6eaff;\n' +
       '}\n' +
       'main{\n' +
       '    margin-bottom: 20px;\n' +
       '}\n' +
       'h1,h2{\n' +
       '    font-weight: bold;\n' +
       '}\n' +
       'h2{\n' +
       '    padding-top: 30px;\n' +
       '}\n' +
       'form{\n' +
       '    background-color: #fff;\n' +
       '    border-radius: 10px;\n' +
       '    border: 2px solid; \n' +
       '}\n' +
       '.container{\n' +
       '    display: flex;\n' +
       '    text-align: center;\n' +
       '    padding: 0;\n' +
       '}\n' +
       '.foto-perfil{\n' +
       '    width: 300px;\n' +
       '    height: 300px;\n' +
       '    border-radius: 10px;\n' +
       '}\n' +
       '.container-perfil{\n' +
       '    display: flex;\n' +
       '    flex-direction: column;\n' +
       '    margin-left: 10px;\n' +
       '}\n' +
       '.form-p{\n' +
       '    font-weight: bold;\n' +
       '    border-bottom: 1px solid #dee2e6;\n' +
       '}\n' +
       '#titulo-perfil-profesional, #titulo-info-personal, #titulo-datos-contacto,\n' +
       '#titulo-habilidades, #titulo-educacion, #titulo-certificaciones{\n' +
       '    border-bottom: 3px solid #0d6efd;\n' +
       '}\n' +
       '.form-label{\n' +
       '    font-weight: bold;\n' +
       '}\n' +
       'ul{\n' +
       '    padding-left: 0;\n' +
       '}\n' +
       'li{\n' +
       '    list-style: none;\n' +
       '}\n' +
       '.certificaciones-curriculum{\n' +
       '    padding-bottom: 30px;\n' +
       '}\n';

   imprimirCurriculumEnPDF(form, header, estilo);
});

function imprimirCurriculumEnPDF(form, header, estilo) {
    let ventana = window.open('', 'PRINT', 'height=400,width=600');

    ventana.document.write('<html><head><title>' + document.title + '</title>');
    ventana.document.write('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>');
    ventana.document.write('<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel="stylesheet">');
    ventana.document.write('<style>');
    ventana.document.write(estilo);
    ventana.document.write('</style>');
    ventana.document.write('</head><body >');
    ventana.document.write(header.innerHTML);
    ventana.document.write(form.innerHTML);
    ventana.document.write('</body></html>');
    ventana.document.close();

    ventana.focus();
    ventana.print();
}

botonVolver.addEventListener("click",function (evento) {
    localStorage.clear();
});

