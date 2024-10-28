class Hotel {
    nombre: string;
    ubicacion: string;
    habitaciones: Habitacion[];

    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.habitaciones = [];
    }

    agregarHabitacion(habitacion: Habitacion): void {
        this.habitaciones.push(habitacion);
    }

    mostrarHabitaciones(): string {
        return this.habitaciones.map(h => h.descripcion()).join("\n");
    }
}

class Habitacion {
    numero: number;
    precio: number;
    estado: boolean; 
    constructor(numero: number, precio: number) {
        this.numero = numero;
        this.precio = precio;
        this.estado = false; // inicia como habitacion libre
    }

    reservar(): string {
        if (this.estado) {
            return `La habitación ${this.numero} ya está ocupada.`;
        }
        this.estado = true;
        return `Habitación ${this.numero} reservada con éxito.`;
    }

    liberar(): string {
        if (!this.estado) {
            return `La habitación ${this.numero} ya está libre.`;
        }
        this.estado = false;
        return `Habitación ${this.numero} liberada con éxito.`;
    }

    descripcion(): string {
        return `Habitación ${this.numero} - Precio: $${this.precio} - Estado: ${this.estado ? "Ocupada" : "Libre"}`;
    }
}

const hotel1 = new Hotel("Hotel Maravilla", "Playa del Carmen");
const habitacion1 = new Habitacion(101, 150);
const habitacion2 = new Habitacion(102, 200);

hotel1.agregarHabitacion(habitacion1);
hotel1.agregarHabitacion(habitacion2);

console.log("Habitaciones en el hotel:");
console.log(hotel1.mostrarHabitaciones());

console.log(habitacion1.reservar());
console.log(habitacion2.reservar()); 
console.log(hotel1.mostrarHabitaciones());

console.log(habitacion1.liberar());
console.log(habitacion1.liberar()); 
console.log(hotel1.mostrarHabitaciones());
