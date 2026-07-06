//operaciones basicaas carrito de compras
let carrito = []
function mostrarcarrito() {
    if (carrito.lenght === 0) {
        console.log("carrito vacio");
        return
    }
    console.log('carrito($(carrito.lenght) items):[$(carrito.join(", ")}]');
}
mostrarcarrito();
//agregar productos
carrito.push("portatil asus");
carrito.push("mouse");
carrito.push("memoria USB");
carrito.push("adaptador HDMI");
carrito.push("SSIB");
mostrarcarrito();
//agregar el inicio productos con unshift : memoria RAM, cable poder
carrito.unshift("memoria RAM");
carrito.unshift("cable de poder");
console.log(carrito);

//eliminar el ultimo con pop
let eliminado = carrito.pop();
console.log(eliminado);
console.log(carrito);


//verificar la existencia con finder o incluides

// Verificar la existencia con find o includes

// Con includes
let existe = carrito.includes("cable de poder");
console.log(existe);

// Con find
let busquedaProducto = carrito.find(producto => producto === "cable de poder");
console.log(busquedaProducto);