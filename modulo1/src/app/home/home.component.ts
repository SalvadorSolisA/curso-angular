import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../model/pelicula';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: string;
  @Input() peliculaHome: Pelicula;

  ngOnInit(): void {
    this.titulo = "Bienvenido....";
  }

  recibirPeliculaHome(event: any): Pelicula{
    console.log('pelicula recibida');
    console.log(this.peliculaHome.getTitulo);

    return this.peliculaHome;
  }


}
