import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListaPeliculasFavoritasComponent } from './lista-peliculas-favoritas/lista-peliculas-favoritas.component';
import { CatalogoPeliculasComponent } from './catalogo-peliculas/catalogo-peliculas.component';
import { HomeComponent } from './home/home.component';
import { PeliculasApiClient } from './service/PeliculasApiClient';
import { NavComponent } from './nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from './state/app.state';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaPeliculasFavoritasComponent,
    CatalogoPeliculasComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot( ROOT_REDUCER ),//toma el valor que se exporto de AppState.ts
  ],
  providers: [ PeliculasApiClient ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
