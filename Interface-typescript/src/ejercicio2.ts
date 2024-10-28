interface User {
    nombre: string;
    id: number;
}

interface Admin extends User {
    privilegios: string[]; 
}

function imprimirDatosUsuario(usuario: User) {
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`ID: ${usuario.id}`);

    if ('privilegios' in usuario) {
        const admin = usuario as Admin;
        console.log(`Privilegios: ${admin.privilegios.join(', ')}`);
    }
} 

const admin1: Admin = {
    nombre: 'Carmensita',
    id: 1,
    privilegios: ['crear usuarios', 'eliminar usuarios', 'editar configuraciones']
}

const usuario1: User = {
    nombre: 'Juan',
    id: 2
}

const usuario2: User = {
    nombre: 'Andres',
    id: 3
}

imprimirDatosUsuario(usuario1);
imprimirDatosUsuario(admin1);
