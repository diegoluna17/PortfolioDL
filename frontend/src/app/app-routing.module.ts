import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components_home/home/home.component';
import { LoginComponent } from './components_login/login/login.component';
import { NewExpericienciaLComponent } from './experienciaLaboral_components/experiencia-laboral/new-expericiencia-l.component';
import { EditExpericienciaLComponent } from './experienciaLaboral_components/experiencia-laboral/edit-expericiencia-l.component';
import { EditEstudiosComponent } from './estudios_components/estudios/edit-estudios.component';
import { NewEstudioComponent } from './estudios_components/estudios/new-estudio.component';
import { EditAcercaDeMiComponent } from './acercademi_components/acercademi/edit-acerca-de-mi.component';
import { NewHardysoftskillComponent } from './hardysoftskill-components/new-hardysoftskill.component';
import { EditHardysoftskillComponent } from './hardysoftskill-components/edit-hardysoftskill.component';
import { NewProyectoComponent } from './proyectos_components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './proyectos_components/proyectos/edit-proyecto.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'newexpericialab', component: NewExpericienciaLComponent},
  {path: 'editexp/:id', component: EditExpericienciaLComponent},
  {path: 'newestudio', component: NewEstudioComponent},
  {path: 'editestudio/:id', component: EditEstudiosComponent},
  {path: 'editacercademi/:id', component: EditAcercaDeMiComponent},
  {path: 'newhyss', component: NewHardysoftskillComponent},
  {path: 'edithyss/:id', component:EditHardysoftskillComponent},
  {path: 'newproyecto', component:NewProyectoComponent},
  {path: 'editproyecto/:id', component:EditProyectoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
