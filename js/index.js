const boton = document.getElementById('boton');
const nombre = document.getElementById('nombre');
const numero = document.getElementById('numero');
const lista = document.getElementById('lista');
const cGuardados = JSON.parse(localStorage.getItem('listaDContactos'));

let listaDContactos = [];

if (cGuardados !== null){
     listaDContactos = cGuardados;
}

let deleteButtons = [];

function agregarContacto(){
    let contacto = {
        nombre: nombre.value,
        numero: numero.value
    };
    listaDContactos.push(contacto)
    mostrarContactos()
    nombre.value = ''
    numero.value = ''
    actualizarStorage()
};

function mostrarContactos(){
    lista.innerHTML = '';
    HTMLtoAppend = '';
    for (i=0; i<listaDContactos.length;i++){
        HtmlActual = `
            <li>${listaDContactos[i].nombre} | Teléfono: ${listaDContactos[i].numero} | <input type='button' value='Eliminar' class='btn-delete' id='${[i]}'></li>
        `;
        HTMLtoAppend = HTMLtoAppend + HtmlActual;
    }
    console.log(HTMLtoAppend)
    lista.innerHTML = HTMLtoAppend;
    deleteButtons = document.querySelectorAll(".btn-delete")
    deleteButtons.forEach((delBtn) => {
        delBtn.addEventListener('click', () => {
            eliminarContacto(delBtn.id)
        })
    })
}

function eliminarContacto(entrada){
   listaDContactos.splice(entrada,1)
   mostrarContactos()
   actualizarStorage()
}

function actualizarStorage(){
    localStorage.setItem('listaDContactos', JSON.stringify(listaDContactos))
}


mostrarContactos()
boton.addEventListener('click', agregarContacto)

