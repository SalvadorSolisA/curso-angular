import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pelicula } from 'src/app/model/pelicula';
import { PeliculasApiClient } from 'src/app/service/PeliculasApiClient';
import { decrementVote, incrementVote } from 'src/app/state/actions/votes.actions';

declare var $: any;

@Component({
  selector: 'app-lista-peliculas-favoritas',
  templateUrl: './lista-peliculas-favoritas.component.html',
  styleUrls: ['./lista-peliculas-favoritas.component.css']
})
export class ListaPeliculasFavoritasComponent implements OnInit{
  
  public listPeliculasFvoritas: Pelicula[];
  //items: Item[];
  
  //modal
  public showDialogFavoriteSelect: boolean;

  constructor(private _catalogo: PeliculasApiClient, 
    private _router: Router,
    public store: Store<any>,
  ){}

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
    this.store.dispatch(incrementVote(1));
  }

  public down(itemId: number){
    this.store.dispatch(decrementVote(2));
  }
}
