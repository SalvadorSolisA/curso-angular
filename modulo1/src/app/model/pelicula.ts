export class Pelicula{
    private titulo: string;
    private director: string;
    private año: number;

    constructor(titulo: string, director: string, año: number){
        this.titulo = titulo;
        this.director = director;
        this.año = año;
    }

    getTitulo(): string{
        return this.titulo;
    }

    getDirector(): string{
        return this.director;
    }

    getAño(): number{
        return this.año;
    }
}