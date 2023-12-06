import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../model/pelicula';
import { PeliculasApiClient } from '../service/PeliculasApiClient';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Item, VotesState, decrementVote, incrementVote } from '../model/votes-state';

declare var $: any;

@Component({
  selector: 'app-lista-peliculas-favoritas',
  templateUrl: './lista-peliculas-favoritas.component.html',
  styleUrls: ['./lista-peliculas-favoritas.component.css']
})
export class ListaPeliculasFavoritasComponent implements OnInit{
  
  public listPeliculasFvoritas: Pelicula[];
  items: Item[];
  
  //modal
  public showDialogFavoriteSelect: boolean;

  constructor(private _catalogo: PeliculasApiClient, 
    private _router: Router,

    private _store: Store<{ votes: VotesState }>){
      this._store.select('votes').subscribe((state) => {
        this.items = state.items
      });
    }

  ngOnInit(): void {
    this.listPeliculasFvoritas = this._catalogo.getListaPeliculasFav();
    this.showDialogFavoriteSelect = false;
  }

  public agregarPelicula(newPelicula: Pelicula){
    console.log('addPeliculaFavorita');
    this.listPeliculasFvoritas.push(newPelicula);
  }

  public verDetalle(select: Pelicula){
    this._router.navigateByUrl('');
  }

  public abrirModal() {
    $('#formulario').modal('show');
  }

  public cerrarModal() {
    $('#formulario').modal('hide');
  }


  public up(itemId: number){
    //let itemId = 1;
    this._store.dispatch(incrementVote(itemId));
  }

  public down(itemId: number){
    this._store.dispatch(decrementVote(itemId));
  }
}
