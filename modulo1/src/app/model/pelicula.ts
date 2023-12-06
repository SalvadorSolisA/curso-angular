export class Pelicula{
    private titulo: string;
    private director: string;
    private anio: number;

    constructor(titulo: string, director: string, anio: number){
        this.titulo = titulo;
        this.director = director;
        this.anio = anio;
    }

    getTitulo(): string{
        return this.titulo;
    }

    getDirector(): string{
        return this.director;
    }

    getAnio(): number{
        return this.anio;
    }
}