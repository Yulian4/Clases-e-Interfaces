interface Vehicle {
    model: string;
    year: number;
    color: string;
    acelerar(): void;
    frenar(): void;
}

interface Car extends Vehicle {
    numeroAsientos: number;
    TipoCombustible: string; 
}


interface Motorcycle extends Vehicle {
    cilindraje: string;
    tipo: string; 
}

class concesionario implements Car {
    model: string;
    year: number;
    color: string;
    numeroAsientos: number;
    TipoCombustible: string;

    constructor(model: string, year: number, color: string, numeroAsientos: number, TipoCombustible: string) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.numeroAsientos = numeroAsientos;
        this.TipoCombustible = TipoCombustible;
    }

    acelerar(): void {
        console.log(`${this.model} está acelerando.`);
    }

    frenar(): void {
        console.log(`${this.model} está frenando.`);
    }
}


class TiendaMotos implements Motorcycle {
    model: string;
    year: number;
    color: string;
    cilindraje: string;
    tipo: string;

    constructor(model: string, year: number, color: string, cilindraje: string, tipo: string) {
        this.model = model;
        this.year = year;
        this.color = color;
        this.cilindraje = cilindraje;
        this.tipo = tipo;
    }

    acelerar(): void {
        console.log(`${this.model} está acelerando.`);
    }

    frenar(): void {
        console.log(`${this.model} está frenando.`);
    }
}

// Ejemplo de uso
const car1 = new concesionario('Honda Accord', 2023, 'Azul', 4, 'Gasolina');
car1.acelerar();
car1.frenar();

const motorcycle1 = new TiendaMotos('Yamaha R1', 2022, 'Negro', '998cc', 'Deportiva');
motorcycle1.acelerar();
motorcycle1.frenar();
