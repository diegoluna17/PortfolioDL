import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components_home/home/home.component';
import { LoginComponent } from './components_login/login/login.component';
import { NewExpericienciaLComponent } from './experienciaLaboral_components/experiencia-laboral/new-expericiencia-l.component';
import { EditExpericienciaLComponent } from './experienciaLaboral_components/experiencia-laboral/edit-expericiencia-l.component';
import { EditEstudiosComponent } from './estudios_components/estudios/edit-estudios.component';
import { NewEstudioComponent } from './estudios_components/estudios/new-estudio.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newexpericialab', component: NewExpericienciaLComponent},
  {path: 'editexp/:id', component: EditExpericienciaLComponent},
  {path: 'newestudio', component: NewEstudioComponent},
  {path: 'editestudio/:id', component: EditEstudiosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
