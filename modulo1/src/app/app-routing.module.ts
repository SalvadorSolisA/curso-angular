import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
