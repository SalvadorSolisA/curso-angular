import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from "@angular/forms";
import { ListaPeliculasFavoritasComponent } from './lista-peliculas-favoritas/lista-peliculas-favoritas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaPeliculasFavoritasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
