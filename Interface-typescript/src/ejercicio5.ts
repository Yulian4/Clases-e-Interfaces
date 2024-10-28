interface Database {
    connect(): void;
    find(id: string): any;
    update(id: string, data: any): void;
    delete(id: string): void;
}

class MySQLDatabase implements Database {
    connect(): void {
        console.log("Conectado a MySQL Database");
    }

    find(id: string): any {
        console.log(`Buscando en MySQL Database el ID: ${id}`);
        return { id, name: "Producto MySQL" }; // Simulación de un producto
    }

    update(id: string, data: any): void {
        console.log(`Actualizando en MySQL Database el ID: ${id} con datos:`, data);
    }

    delete(id: string): void {
        console.log(`Eliminando de MySQL Database el ID: ${id}`);
    }
}

class SQLiteDatabase implements Database {
    connect(): void {
        console.log("Conectado a SQLite Database");
    }

    find(id: string): any {
        console.log(`Buscando en SQLite Database el ID: ${id}`);
        return { id, name: "Producto SQLite" }; 
    }

    update(id: string, data: any): void {
        console.log(`Actualizando en SQLite Database el ID: ${id} con datos:`, data);
    }

    delete(id: string): void {
        console.log(`Eliminando de SQLite Database el ID: ${id}`);
    }
}

const mysqlDB = new MySQLDatabase();
mysqlDB.connect();
const productoMySQL = mysqlDB.find("1");
mysqlDB.update("1", { name: "Nuevo Producto MySQL" });
mysqlDB.delete("1");

const sqliteDB = new SQLiteDatabase();
sqliteDB.connect();
const productoSQLite = sqliteDB.find("1");
sqliteDB.update("1", { name: "Nuevo Producto SQLite" });
sqliteDB.delete("1");
