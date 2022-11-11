let vendedor = ""

const zapatillas = [{
    id:"1",
    nombre: "Adidas All Star",
    proveedor: "A",
    precioUnitario: 10000,
    cantidad:"",
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "zapatillas",
    color: "",
},
{
    id:"2",
    nombre: "New Balance 574",
    proveedor: "A",
    precioUnitario: 15000,
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "zapatillas",
    color: "",
},
{ 
    id:"3",
    nombre: "Nike Air Force",
    proveedor: "A",
    precioUnitario: 19000,
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "zapatillas",
    color: "",}
]
const Indumentaria = [{
    id:"2141",
    nombre: "Biker",
    proveedor: "C",
    precioUnitario: 3000,
    cantidad:"",
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "indumentaria",
    color: "",
},
{
    id:"2145",
    nombre: "Sudadera DryFit",
    proveedor: "C",
    precioUnitario: 7000,
    cantidad:"",
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "indumentaria",
    color: "",
},
{
    id:"2146",
    nombre: "Calza Essentials",
    proveedor: "C",
    precioUnitario: 10000,
    cantidad:"",
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "indumentaria",
    color: "",
}
]
const ProductoDestacado = [{
    id:"10",
    nombre: "Tops Deportivos",
    proveedor: "X",
    precioUnitario: 3000,
    cantidad:"",
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "Producto Destacado",
    color: "",

},
{
    id:"11",
    nombre: "Short Adicolor",
    proveedor: "X",
    precioUnitario: 9000,
    cantidad:"",
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "Producto Destacado",
    color: "",
},
{
    id:"12",
    nombre: "Buzo Corto",
    proveedor: "X",
    precioUnitario: 8000,
    cantidad:"",
    vendedor: vendedor,
    comisionVendedor: 30,
    categoria: "Producto Destacado",
    color: "",
}
]
const productos1 = []
const productos2 = []
const carrito = []
salir = 1

alert("Bienvenidos al Carrito de compras de LuxurySport, Podra elegir entre las categorias, ver nuestros productos, agregar al Carrito y Comprar de manera Segura. (Se aplica Descuento por Cantidad) ")
do {
let eleccion1 = Number(prompt("Elija que categoría de producto quiere buscar: 1-Zapatillas  2-Indumentaria   3-ProductoDestacado   0-Ir a Carrito"))
if (eleccion1 === 1) {
    eleccionUno(zapatillas)
    ordenar()
    productoCategoria(zapatillas)
    vaciarArray(productos1)
    vaciarArray(productos2)
}
if (eleccion1 === 2) {
    eleccionUno(Indumentaria)
    ordenar()
    productoCategoria(Indumentaria)
    vaciarArray(productos1)
    vaciarArray(productos2)
}
if (eleccion1 === 3) {
    eleccionUno(ProductoDestacado)
    ordenar()
    productoCategoria(ProductoDestacado)
    vaciarArray(productos1)
    vaciarArray(productos2)
}
if (eleccion1 === 0) {
    salir = 0
}
} while (salir != 0);

let precioFinal = 0

for (let i = 0; i < carrito.length; i++) {
    precioSumar = carrito[i]
    precioFinal = precioSumar + precioFinal
}
alert("El total a abonar es $ " + precioFinal)

alert("VUELVA PRONTO <3")

function eleccionUno(categoria) {
    categoria.forEach(articulo => { 
        articuloMostrar = articulo.nombre
        productos1.push(articuloMostrar)

        
    })
}
function ordenar() {
    for (let i = 0; i < productos1.length; i++) {
        artOrdenar = 1 + i + " - " + productos1[i] + " " ;
        productos2.push(artOrdenar)

        
    }
}
function productoCategoria (categoria) {
    eleccion2 = prompt("Elija el producto que desea comprar: " + productos2)
    precio = categoria[eleccion2 - 1].precioUnitario

    cantidad = prompt("Elija la cantidad que desea comprar del producto (mínimo 2)")
    alert("El precio es $ " + factorCantidad(precio, cantidad) + " - Añadido al Carrito" )
}
function factorCantidad(precio, cantidad) {
    if (cantidad<2) {
        alert("Error, cantidad mínima 2")
        precio = 0
        precioDevuelto = precio
    } 
    if (cantidad>=2 && cantidad<3) {
        precioDevuelto = precio
 

    }
    if (cantidad>=3 && cantidad<10) {
        precioDevuelto = precio*0.90

    }
    if (cantidad>=10 && cantidad<15) {
        precioDevuelto = precio*0.85

    }
    if (cantidad>=15 && cantidad<20) {
        precioDevuelto = precio*0.80

    }
    if (cantidad>=20 && cantidad<25) {
        precioDevuelto = precio*0.75

    }
    if (cantidad>=50) {
        precioDevuelto = precio*0.65

    }
    precioDevuelto = precioDevuelto * cantidad;
    carrito.push(precioDevuelto)
    return precioDevuelto
}
function vaciarArray(array) {
    do {
        array.pop()
    } while (array.length != 0);
} 
