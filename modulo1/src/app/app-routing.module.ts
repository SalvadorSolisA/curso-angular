import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { UsuarioLogeadoGuard } from './guards/usuario-logeado/usuario-logeado.guard';
import { VuelosMainComponentComponent } from './components/vuelos/vuelos-main-component/vuelos-main-component.component';
import { VuelosMasInfoComponentComponent } from './components/vuelos/vuelos-mas-info-component/vuelos-mas-info-component.component';
import { VuelosMasDetalleComponentComponent } from './components/vuelos/vuelos-detalle-component/vuelos-detalle-component.component';
import { VuelosComponentComponent } from './components/vuelos/vuelos-component/vuelos-component.component';


export const childrenRoutesVuelos: Routes = [  
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', component: VuelosMainComponentComponent },
  { path: 'mas-info', component: VuelosMasInfoComponentComponent },
  { path: ':id', component: VuelosMasDetalleComponentComponent },
];


const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'home', component: HomeComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [ UsuarioLogeadoGuard]},
  {path: 'vuelos', component: VuelosComponentComponent, canActivate: [ UsuarioLogeadoGuard], children: childrenRoutesVuelos},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
