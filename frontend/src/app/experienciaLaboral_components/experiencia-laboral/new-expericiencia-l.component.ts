import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';

@Component({
  selector: 'app-new-expericiencia-l',
  templateUrl: './new-expericiencia-l.component.html',
  styleUrls: ['./new-expericiencia-l.component.css']
})
export class NewExpericienciaLComponent implements OnInit {
  
  nombreE: string
  descripcionE: string
  exp: ExperienciaLaboral

  constructor(private sExperiencia: SExperienciaLaboralService, private router:Router) { }

  ngOnInit(): void {
  
  }

  onCreate(): void{
    this.exp = new ExperienciaLaboral(this.nombreE, this.descripcionE)
    this.sExperiencia.save(this.exp).subscribe(
      data => {
        alert("Experiencia añadida"); 
        this.router.navigate(['']);
      }, 
      err => {
        alert("Ups, creo que ocurrio un problema. Intenta nuevamente");
        this.router.navigate(['']);    
      }
    )
    }
}
