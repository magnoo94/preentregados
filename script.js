class Producto {
    constructor(nombre, marca, precio, cantidad) {
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const mercancia1 = new Producto("Botines", "Nike", 350, 300)
const mercancia2 = new Producto("Jersey De Entrenamiento", "Puma", 140, 400)
const mercancia3 = new Producto("Medias Largas", "Adidas", 25, 350)
const mercancia4 = new Producto("Espinilleras", "New Balance", 50, 325)
const mercancia5 = new Producto("Shorts", "Joma", 90, 550)
const mercancia6 = new Producto("Tobilleras", "Payaso", 30, 100)

let productos = [mercancia1, mercancia2, mercancia3, mercancia4, mercancia5, mercancia6]

let carrito = []

if (localStorage.getItem('carrito')) { // Si no existe, esto da null
    //Conversion de JSON a objeto
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    //conversion Objeto a JSON
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

let divMercado = document.querySelector('#divMercado')

// DOMS creando las cajas con nombre, marca, precio y cantidad del producto.
productos.forEach((productoEnArray, indice) => {
    divMercado.innerHTML += `
        <div class="card border-primary mb-5"  id="producto${indice}" style="max-width: 20rem;">
            <div class="card-header">${productoEnArray.nombre}</div>
                <div class="card-body">
                <p class="card-text">${productoEnArray.marca}</p>
                <p class="card-text">$${productoEnArray.precio}</p>
                <p class="card-text">${productoEnArray.cantidad}</p>
                <button id="boton${indice}" class="btn btn-dark">Agregar al carrito</button>
            </div>
        </div>
    `
})
// localstorage por cada vez que hagas un click en cualquier producto y 
//se puede acumular nuevos productos al carrito tambien se usa un evento cuando se hace click.
productos.forEach((productoEnArray, indice) => {
    document.querySelector(`#boton${indice}`).addEventListener('click', () => {

        let productoCarrito = productos[indice]
        carrito.push(productoCarrito)
        localStorage.setItem('carrito', JSON.stringify(carrito))
    })

})
