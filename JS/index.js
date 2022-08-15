// declaración de variables
const container = document.getElementById("productos_container");
const formulario = document.getElementById("formulario");
const anioActual = new Date().getFullYear();
const pagar = document.getElementById("pagar");
const cards = document.getElementById('cards');
const items = document.getElementById('items');
const carritoCompras = document.getElementById('carrito-compras');
const templateCard = document.getElementById('template-card').content
const templateCarrito = document.getElementById('template-carrito').content
const templateProducto = document.getElementById('template-producto').content
const fragment = document.createDocumentFragment();
let carrito = {}


document.addEventListener('DOMContentLoaded', () => {
    fetchDatos();
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        verCarrito();
    };
});

cards.addEventListener('click', e => {
    addCarrito(e);
    Swal.fire({
        title: "Producto Agregado",
        confirmButtonText: "Aceptar",
        icon: "success",
        background: '#c2f7e5'
    })
});

items.addEventListener('click', e => {
    btnAccion(e);
});

// trae productos del json
const fetchDatos = async () => {
    try{
        const resp = await fetch('data/productos.json')
        const data = await resp.json()
        mostrarCards(data);
    }catch (error){
        console.log(error);
    }
};

// mostrar productos en una grilla
const mostrarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.name
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.img)
        templateCard.querySelector('.btn-success').dataset.id = producto.id

        const clone = templateCard.cloneNode(true);
        fragment.appendChild(clone);
    });
    cards.appendChild(fragment);
};

// agregar productos al carrito
const addCarrito = e => {
    if(e.target.classList.contains('btn-success')){
        setCarrito(e.target.parentElement);
    }; 
    e.stopPropagation();
};

// dibujar carrito
const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-success').dataset.id,
        name: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1;
    };
    carrito[producto.id] = {...producto}
    verCarrito();
};

// mostrar carrito
const verCarrito = () => {
items.innerHTML = '';
    Object.values(carrito).forEach(producto => {
        templateProducto.querySelector('th').textContent = producto.id
        templateProducto.querySelectorAll('td')[0].textContent = producto.name
        templateProducto.querySelectorAll('td')[1].textContent = producto.cantidad
        templateProducto.querySelector('.btn-info').dataset.id = producto.id
        templateProducto.querySelector('.btn-danger').dataset.id = producto.id
        templateProducto.querySelector('span').textContent = producto.cantidad * producto.precio
        const clone = templateProducto.cloneNode(true);
        fragment.appendChild(clone);
    });
    items.appendChild(fragment)
    verCarritoCompras();

    localStorage.setItem('carrito', JSON.stringify(carrito))
};

// aumentar y dusminuir productos
const verCarritoCompras = () => {
    carritoCompras.innerHTML = '';
    if(Object.keys(carrito).length === 0) {
        carritoCompras.innerHTML = `
        <th scope="row" colspan="5">¡Carrito Vacío!</th>
        `
        return;
    }
    const nCantidad = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)

    templateCarrito.querySelectorAll('td')[0].textContent = nCantidad
    templateCarrito.querySelector('span').textContent = nPrecio

    const clone = templateCarrito.cloneNode(true)
    fragment.appendChild(clone)
    carritoCompras.appendChild(fragment)

    const btnEliminar = document.getElementById('vaciar-carrito')
    btnEliminar.addEventListener('click', () => {
        carrito = {}
        verCarrito();
    });
};

// accionar de los botones
const btnAccion = e => {
    // aumentar
    if(e.target.classList.contains('btn-info')){
       
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = {...producto}
        verCarrito();
    }
    // disminuir
    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id];
        }
        verCarrito();
    };

};

for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.seleccionMes.appendChild(opcion);
    
};

for (let i = anioActual; i < anioActual + 12; i++) {
    let opcion = document.createElement("option");
    opcion.value = i;
    opcion.innerText = i;
    formulario.seleccionAnio.appendChild(opcion);
    
};

formulario.addEventListener("submit", (e) => {
    let form = e.target;
    let nombre = form.children[0].value;
    let numeroTarjeta = form.children[1].value;
    let mes = form.children[2].value
    let año = form.children[3].value;
    let clave = form.children[4].value;

    carrito = {};
    verCarrito();

});

