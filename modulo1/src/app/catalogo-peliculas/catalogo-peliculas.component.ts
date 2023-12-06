import { Component } from '@angular/core';
import { Pelicula } from '../model/pelicula';

@Component({
  selector: 'app-catalogo-peliculas',
  templateUrl: './catalogo-peliculas.component.html',
  styleUrls: ['./catalogo-peliculas.component.css']
})
export class CatalogoPeliculasComponent {
   public catalogoPeliculas: Pelicula[];
}
