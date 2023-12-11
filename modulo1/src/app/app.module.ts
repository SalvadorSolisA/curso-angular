import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasApiClient } from './service/PeliculasApiClient';
import { NavComponent } from './components/nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCER } from './state/app.state';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaPeliculasFavoritasComponent } from './components/lista-peliculas-favoritas/lista-peliculas-favoritas.component';
import { CatalogoPeliculasComponent } from './components/catalogo-peliculas/catalogo-peliculas.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { LoginComponent } from './components/login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaPeliculasFavoritasComponent,
    CatalogoPeliculasComponent,
    HomeComponent,
    NavComponent,
    ProtectedComponent,
    LoginComponent
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
