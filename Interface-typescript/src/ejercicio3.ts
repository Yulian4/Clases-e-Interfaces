interface Producto {
    nombre: string;
    marca: string;
    descripcion: string;
    precio: number;
}

interface Inventario {
    productos: Producto[];
    agregarProducto(producto: Producto): void;
    buscarProducto(nombre: string): Producto | undefined;
}

const inventario: Inventario = {
    productos: [],
    agregarProducto(producto) {
        this.productos.push(producto);
    },
    buscarProducto(nombre) {
        return this.productos.find(producto => producto.nombre === nombre);
    }
};


const producto1: Producto = {
    nombre: 'Celular',
    marca: 'Samsung',
    descripcion: 'Samsung Galaxy s20 FE',
    precio: 1200
};

inventario.agregarProducto(producto1);

const productoEncontrado = inventario.buscarProducto('Celular');
if (productoEncontrado) {
    console.log(`Producto encontrado: ${productoEncontrado.nombre}, Precio: $${productoEncontrado.precio}`);
} else {
    console.log('Producto no encontrado.');
}
