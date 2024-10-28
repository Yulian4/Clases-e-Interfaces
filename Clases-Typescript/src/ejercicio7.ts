class Pelicula {
    titulo: string;
    duracion: number; 
    director: string;

    constructor(titulo: string, duracion: number, director: string) {
        this.titulo = titulo;
        this.duracion = duracion;
        this.director = director;
    }

    descripcion(): string {
        return `${this.titulo} (Duración: ${this.duracion} minutos) - Dirigida por: ${this.director}`;
    }
}

class CatalogoPeliculas {
    private peliculas: Pelicula[];

    constructor() {
        this.peliculas = [];
    }

    agregarPelicula(pelicula: Pelicula): void {
        this.peliculas.push(pelicula);
    }

    buscarPorTitulo(titulo: string): Pelicula | null {
        const peliculaEncontrada = this.peliculas.find(p => p.titulo.toLowerCase() === titulo.toLowerCase());
        return peliculaEncontrada || null;
    }

    filtrarPorDirector(director: string): Pelicula[] {
        return this.peliculas.filter(p => p.director.toLowerCase() === director.toLowerCase());
    }

    listarPeliculas(): string {
        return this.peliculas.map(p => p.descripcion()).join("\n");
    }
}

const catalogo = new CatalogoPeliculas();
const pelicula1 = new Pelicula("Son como niños", 162, "Dennis Dugan");
const pelicula2 = new Pelicula("La mujer maravilla", 141, "Patty Jenkins");
const pelicula3 = new Pelicula("Coraline", 175, "Henry Selick");

catalogo.agregarPelicula(pelicula1);
catalogo.agregarPelicula(pelicula2);
catalogo.agregarPelicula(pelicula3);

console.log("Listado de películas en el catálogo:");
console.log(catalogo.listarPeliculas());

const buscada = catalogo.buscarPorTitulo("Coraline");
if (buscada) {
    console.log(`\nPelícula encontrada:\n${buscada.descripcion()}`);
} else {
    console.log("\nPelícula no encontrada.");
}

const peliculasPorDirector = catalogo.filtrarPorDirector("Dennis Dugan");
console.log("\nPelículas dirigidas por Dennis Dugan:");
peliculasPorDirector.forEach(p => console.log(p.descripcion()));
