
abstract class Vehículo {// clase abstracta qu ele voy a dar una forma pero no significa que es algo en concreto
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract desplazarse(): string; 
}//para darle una forma a algo sin definir algo 


class Coche extends Vehículo {
    constructor(nombre: string) {
        super(nombre);
    }

    desplazarse(): string {
        return `${this.nombre} Esta en movimiento.`;
    }
}

class Barco extends Vehículo {
    constructor(nombre: string) {
        super(nombre);
    }

    desplazarse(): string {
        return `${this.nombre} está en movimiento en el agua.`;
    }
}


class Avión extends Vehículo {
    constructor(nombre: string) {
        super(nombre);
    }

    desplazarse(): string {
        return `${this.nombre} está en movimiento en el cielo.`;
    }
}

const miCoche = new Coche("Toyota");
const miBarco = new Barco("Barco azul");
const miAvion = new Avión("Avianca");


console.log(miCoche.desplazarse());
console.log(miBarco.desplazarse());
console.log(miAvion.desplazarse());
