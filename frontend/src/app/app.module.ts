import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header_components/header/header.component';
import { AcercademiComponent } from './acercademi_components/acercademi/acercademi.component';
import { EstudiosComponent } from './estudios_components/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
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
import { EditAcercaDeMiComponent } from './acercademi_components/acercademi/edit-acerca-de-mi.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { HardysoftskillComponentsComponent } from './hardysoftskill-components/hardysoftskill-components.component';
import { NewHardysoftskillComponent } from './hardysoftskill-components/new-hardysoftskill.component';
import { EditHardysoftskillComponent } from './hardysoftskill-components/edit-hardysoftskill.component';
import { ProyectosComponent } from './proyectos_components/proyectos/proyectos.component';
import { NewProyectoComponent } from './proyectos_components/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './proyectos_components/proyectos/edit-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercademiComponent,
    EstudiosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExpericienciaLComponent,
    ExperienciaLaboralComponent,
    EditExpericienciaLComponent,
    NewEstudioComponent,
    EditEstudiosComponent,
    EditAcercaDeMiComponent,
    HardysoftskillComponentsComponent,
    NewHardysoftskillComponent,
    EditHardysoftskillComponent,
    ProyectosComponent,
    NewProyectoComponent,
    EditProyectoComponent,
  ],

  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
