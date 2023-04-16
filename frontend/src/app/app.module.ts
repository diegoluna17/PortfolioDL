import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header_components/header/header.component';
import { AcercademiComponent } from './acercademi_components/acercademi/acercademi.component';
import { EstudiosComponent } from './estudios_components/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HyssComponent } from './hardsoftskills_components/hyss/hyss.component';
import { CircleprogressComponent } from './hardsoftskills_components/circleprogress/circleprogress.component';
import { ProyectosComponent } from './proyectos_components/proyectos/proyectos.component';
import { Proyecto1Component } from './proyectos_components/proyecto1/proyecto1.component';
import { FooterComponent } from './footer_components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components_home/home/home.component';
import { LoginComponent } from './components_login/login/login.component';
import { interceptorProvider } from './service/interceptor.service';
import { NewExpericienciaLComponent } from './experienciaLaboral_components/experiencia-laboral/new-expericiencia-l.component';
import { ExperienciaLaboralComponent } from './experienciaLaboral_components/experiencia-laboral/experiencia-laboral.component';
import { EditExpericienciaLComponent } from './experienciaLaboral_components/experiencia-laboral/edit-expericiencia-l.component';
import { NewEstudioComponent } from './estudios_components/estudios/new-estudio.component';
import { EditEstudiosComponent } from './estudios_components/estudios/edit-estudios.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercademiComponent,
    EstudiosComponent,
    HyssComponent,
    CircleprogressComponent,
    ProyectosComponent,
    Proyecto1Component,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExpericienciaLComponent,
    ExperienciaLaboralComponent,
    EditExpericienciaLComponent,
    NewEstudioComponent,
    EditEstudiosComponent,
    
  ],

  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
