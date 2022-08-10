const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const verCarrito = document.getElementById("verCarrito");
const botones = document.getElementById("botones");
const seccionDeProductos = document.getElementById("productos");
const seccionPageProductos = document.getElementById("pageProductos");
// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};


// MODIFICAR A ASYNC AWAIT
function crearDivs() {

    fetch("../data/productosInicio.json")
    .then(resp => resp.json())
    .then(productos => {
        productos.forEach(producto => {
            const card = document.createElement("div.col");
            card.innerHTML = `
                <div class="card h-100">
                    <img src="${producto.img}" class="card-img-top img-fluid" alt="${producto.nombre}">
                    <div class="card-body">
                        <h3 class="card-title">${producto.nombre}</h3>
                        <p class="card-text">$${producto.precio}</p>
                        <button id="${producto.id}">Agregar al carrito</button>
                    </div>
                </div>`
        seccionDeProductos.append(card);
        
        });  
    }).catch(err => console.log(err));
    
};

crearDivs();

// agregarAlCarrito.addEventListener("click", () => {

// });



// verCarrito.addEventListener("click", () => {
//     seccionDeProductos.innerHTML = "";
//     for (const producto of carrito) {
//         let cardCarrito = document.createElement("div.col");
//         cardCarrito.innerHTML = `<div class="card h-100">
//                             <img src="${producto.img}" class="card-img-top" alt="${producto.nombre}">
//                             <div class="card-body">
//                                 <h5 class="card-title">${producto.nombre}</h5>
//                                 <p class="card-text">$${producto.precio}</p>
//                             </div>
//                         </div>`
//                         seccionDeProductos.append(cardCarrito);
//         }
   
// });

// function crearProductos() {
//     fetch("../data/productos.json")
//     .then(resp => resp.json())
//     .then(productos => {
//         productos.forEach(producto => {
//             const grilla = document.createElement("div.col");
//             grilla.innerHTML = `
//                 <div class="card h-100">
//                     <img src="${producto.img}" class="card-img-top img-fluid" alt="${producto.nombre}">
//                     <div class="card-body">
//                         <h3 class="card-title">${producto.nombre}</h3>
//                         <p class="card-text">$${producto.precio}</p>
//                         <button id="${producto.id}">Agregar al carrito</button>
//                     </div>
//                 </div>`
//                 seccionPageProductos.append(grilla);
//         });  
//     })
//     .catch(error => console.log(error));
// };