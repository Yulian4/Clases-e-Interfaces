class CuentaBancaria {
    numeroCuenta: string;
    Propietario: string;
    saldo: number;

    constructor(numeroCuenta: string, titular: string, saldoInicial: number = 0) {
        this.numeroCuenta = numeroCuenta;
        this.Propietario = titular;
        this.saldo = saldoInicial;
    }

    depositar(cantidad: number): string {
        if (cantidad > 0) {
            this.saldo += cantidad;
            return `Se han depositado $${cantidad}. Nuevo saldo: $${this.saldo}.`;
        }
        return "La cantidad a depositar debe ser mayor que cero.";
    }

    retirar(cantidad: number): string {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            return `Retiro exitoso has retirado: $${cantidad}. Saldo restante: $${this.saldo}.`;
        } else if (cantidad > this.saldo) {
            return "Saldo insuficiente.";
        }
        return "La cantidad a retirar debe ser mayor que cero.";
    }

    consultarSaldo(): string {
        return `El saldo de la cuenta ${this.numeroCuenta} es: $${this.saldo}.`;
    }
}

const cuenta1 = new CuentaBancaria("001", "Ana Pérez", 500);
const cuenta2 = new CuentaBancaria("002", "Luis Gómez", 1000);

console.log(cuenta1.depositar(200000));
console.log(cuenta1.retirar(100000));
console.log(cuenta1.consultarSaldo());

console.log(cuenta2.depositar(300000));
console.log(cuenta2.retirar(1500000)); 
console.log(cuenta2.consultarSaldo());
