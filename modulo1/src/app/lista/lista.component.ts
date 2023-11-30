import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit{
  
  public titulo: string;
  public peliculas: string[];

  posiblesColores = [
    'lightskyblue',
    'cornflowerblue',
  ];

  @HostBinding('style.color') color!: string;
  
  ngOnInit(): void {
    this.titulo = "Lista de peliculas favoritas";
    //iniciando algunos valores a la lista
    this.peliculas = ['El color purpura', 'Flores en atico', 'Interestelar'];
  }

  @HostListener('mouseover') cambiarColor() {
    const colorRadom = Math.floor(Math.random() * this.posiblesColores.length);
    this.color = this.posiblesColores[colorRadom];
  }

  public agregarPelicula(form: NgForm){
    const newPelicula = form.controls['inputPelicula'];
    if(newPelicula != null && newPelicula.value != ''){
      console.log('se agrego: ' + newPelicula.value);
      this.peliculas.push(newPelicula.value);
    }else{
      console.error('no se pudo agregar a la lista');
    }
  }
}
