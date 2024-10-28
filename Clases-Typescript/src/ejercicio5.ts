abstract class Electrodomestico {
    protected precio: number;
    protected color: string;

    constructor(precio: number, color: string) {
        this.precio = precio;
        this.color = color;
    }

    abstract descripcion(): string; 
}

class Televisor extends Electrodomestico {
    private tamaño: number; 

    constructor(precio: number, color: string, tamaño: number) {
        super(precio, color);
        this.tamaño = tamaño;
    }

    descripcion(): string {
        return `Televisor de ${this.tamaño} pulgadas, color ${this.color}, precio: $${this.precio}.`;
    }
}


class Nevera extends Electrodomestico {
    private capacidad: number; 

    constructor(precio: number, color: string, capacidad: number) {
        super(precio, color);
        this.capacidad = capacidad;
    }

    descripcion(): string {
        return `Nevera de ${this.capacidad} litros, color ${this.color}, precio: $${this.precio}.`;
    }
}


class Lavadora extends Electrodomestico {
    private carga: number; 

    constructor(precio: number, color: string, carga: number) {
        super(precio, color);
        this.carga = carga;
    }

    descripcion(): string {
        return `Lavadora de ${this.carga} kg, color ${this.color}, precio: $${this.precio}.`;
    }
}

const miTelevisor = new Televisor(450, "negro", 55);
const miNevera = new Nevera(800, "blanco", 350);
const miLavadora = new Lavadora(600, "plateado", 8);

console.log(miTelevisor.descripcion());
console.log(miNevera.descripcion());
console.log(miLavadora.descripcion());
