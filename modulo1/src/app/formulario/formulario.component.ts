import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from '../model/pelicula';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap,  } from 'rxjs/operators';
import { ajax } from 'jquery';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  
  @HostBinding('style.color') color!: string;
  @Output() peliculaCreada: EventEmitter<Pelicula>
  public titulo: string;
  public fg: FormGroup;
  public searchResult: string[];

  
  posiblesColores = [
    'lightskyblue',
    'cornflowerblue',
  ];

  constructor(private _fb: FormBuilder, private _router: Router){
    this.peliculaCreada = new EventEmitter();

    this.fg = _fb.group({
      inputTitulo:['',[Validators.required]],
      inputDirector:['',[Validators.required]],
      inputAnio:['',[Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }
  
  ngOnInit(): void {
    this.titulo = "Los campos con * son obligatorios";
    let elemNombre = <HTMLInputElement>document.getElementById('inputPelicula');
    
    fromEvent(elemNombre, 'input').pipe(
      map((e : KeyboardEvent) => (e.target as HTMLInputElement).value),
      filter(text => text.length > 4),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(() => ajax('/assets/datos/sugerencias.json'))
    ).subscribe(ajaxResponse => {
      this.searchResult = ajaxResponse.response;
    });
  }

  /* @HostListener('mouseover') cambiarColor() {
    const colorRadom = Math.floor(Math.random() * this.posiblesColores.length);
    this.color = this.posiblesColores[colorRadom];
  } */

  public crearPelicula(){
    const inputTitulo = this.fg.value.inputTitulo;
    const inputDirector = this.fg.value.inputDirector;
    const inputAnio = this.fg.value.inputAnio;
    console.log(this.fg.value);
    if(this.fg.valid){
      let newPeliculaFormulario = new Pelicula(inputTitulo, inputDirector, inputAnio);
      this.peliculaCreada.emit(newPeliculaFormulario);
      console.log('Evento emitido desde el componente formulario');
      console.log(newPeliculaFormulario);
      //this._router.navigateByUrl('/home');
    }else{
      console.error('no se pudo agregar a la lista');
    }
  }
}
