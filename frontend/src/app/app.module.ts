import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header_components/header/header.component';
import { BannerComponent } from './header_components/banner/banner.component';
import { AcercademiComponent } from './acercademi_components/acercademi/acercademi.component';
import { LaboralComponent } from './experiencia_components/laboral/laboral.component';
import { EstudiosComponent } from './experiencia_components/estudios/estudios.component';
import { ExperienciaComponent } from './experiencia_components/experiencia/experiencia.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HyssComponent } from './hardsoftskills_components/hyss/hyss.component';
import { CircleprogressComponent } from './hardsoftskills_components/circleprogress/circleprogress.component';
import { ProyectosComponent } from './proyectos_components/proyectos/proyectos.component';
import { Proyecto1Component } from './proyectos_components/proyecto1/proyecto1.component';
import { FooterComponent } from './footer_components/footer/footer.component';
import { IconosApComponent } from './header_components/iconos-ap/iconos-ap.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components_home/home/home.component';
import { LoginComponent } from './components_login/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercademiComponent,
    LaboralComponent,
    EstudiosComponent,
    ExperienciaComponent,
    HyssComponent,
    CircleprogressComponent,
    ProyectosComponent,
    Proyecto1Component,
    FooterComponent,
    IconosApComponent,
    HomeComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
