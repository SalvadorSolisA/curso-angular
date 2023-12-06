import { BehaviorSubject, Subject } from "rxjs";
import { Pelicula } from "../model/pelicula";

export class PeliculasApiClient{
    private listPeliculasFavoritas : Pelicula[];
    current: Subject<Pelicula>;
    
    constructor(){
        this.listPeliculasFavoritas = [];
        let pelicula: Pelicula;
        pelicula = new Pelicula('Interestelar', 'Christopher Nolan', 2002)
        this.listPeliculasFavoritas.push(pelicula);

        this.current = new BehaviorSubject<Pelicula>(null);
    }

    getListaPeliculasFav(){
        return this.listPeliculasFavoritas;
    }

    addPelicula(p: Pelicula){
        this.listPeliculasFavoritas.push(p);
    }

    deletePelicula(p: Pelicula){
        // Encontrar el índice del objeto que cumple con ciertas condiciones
        let index = this.listPeliculasFavoritas.findIndex(pelicula => pelicula.getTitulo() === p.getTitulo());
        if (index !== -1) {
            // Eliminar el objeto del array utilizando el índice encontrado
            let elementoEliminado = this.listPeliculasFavoritas.splice(index, 1);
            console.log(elementoEliminado);
        }
    }

    suscribeOnChange(fn){
        this.current.subscribe(fn);
    }


}