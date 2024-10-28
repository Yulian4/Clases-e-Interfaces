class Persona {
    nombre: string;
    edad: number;
    documentoIdentidad: string;

    constructor(nombre: string, edad: number, documentoIdentidad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.documentoIdentidad = documentoIdentidad;
    }

    caminar(pasos: number): string {
        return `${this.nombre} ha caminado ${pasos} .`;
    }

    hablar(mensaje: string): string {
        return `${this.nombre} ha dicho '${mensaje}'`;
    }

    comer(comida: string): string {
        return `${this.nombre} está comiendo  ${comida}.`;
    }
}

const persona1 = new Persona("Yul", 28, "12345678A");
const persona2 = new Persona("Lina", 34, "87654321B");


console.log(persona1.caminar(2));
console.log(persona1.hablar("¡Hola! ¡Me alegra verte!"));
console.log(persona1.comer("Pizza"));

console.log(persona2.caminar(5));
console.log(persona2.hablar("El clima está perfecto hoy."));
console.log(persona2.comer("Arroz"));
