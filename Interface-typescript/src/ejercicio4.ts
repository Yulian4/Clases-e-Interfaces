interface BaseObject {
    id: string;
}

interface Usuario extends BaseObject {
    nombre: string;
}

interface ProductoOrden extends BaseObject {
    nombreProducto: string;
    descripcion: string;
}

interface Orden extends BaseObject {
    usuarioId: string;
    productos: ProductoOrden[];
}

function imprimirDatos<T extends BaseObject>(objeto: T): void {
    console.log(`ID: ${objeto.id}`);
    
    if ('nombre' in objeto) {
        const usuario = objeto as Usuario;
        console.log(`Nombre: ${usuario.nombre}`);
    }

    if ('nombreProducto' in objeto && 'descripcion' in objeto) {
        const producto = objeto as ProductoOrden;
        console.log(`Nombre del Producto: ${producto.nombreProducto}`);
        console.log(`Descripción: ${producto.descripcion}`);
    }

    if ('usuarioId' in objeto && 'productos' in objeto) {
        const orden = objeto as Orden;
        console.log(`ID del Usuario: ${orden.usuarioId}`);
        console.log('Productos en la orden:');
        orden.productos.forEach(prod => {
            console.log(` - ${prod.nombreProducto}`);
        });
    }
}

const usuario: Usuario = {
    id: 'u1',
    nombre: 'Juan Pérez'
};

const producto: ProductoOrden = {
    id: 'p1',
    nombreProducto: 'Laptop',
    descripcion: 'Laptop con 16GB de RAM y 512GB SSD'
};

const orden: Orden = {
    id: 'o1',
    usuarioId: 'u1',
    productos: [producto]
};

// Imprimir datos
imprimirDatos(usuario);
imprimirDatos(producto);
imprimirDatos(orden);
