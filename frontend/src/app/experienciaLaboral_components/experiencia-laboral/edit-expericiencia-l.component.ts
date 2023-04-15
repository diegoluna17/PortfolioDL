import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';

@Component({
  selector: 'app-edit-expericiencia-l',
  templateUrl: './edit-expericiencia-l.component.html',
  styleUrls: ['./edit-expericiencia-l.component.css']
})
export class EditExpericienciaLComponent implements OnInit {
  experienciaLaboral: ExperienciaLaboral = null

  constructor(private sExperiencia: SExperienciaLaboralService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id']
    this.sExperiencia.detail(id).subscribe(data =>{
        this.experienciaLaboral = data
      },
      err =>{
        alert("Error al modificar la experiencia")
        this.router.navigate([''])
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id']
    this.sExperiencia.update(id, this.experienciaLaboral).subscribe(data => {
        this.router.navigate([''])
      },
      err => {
        alert("Error al modificar experiencia")
        this.router.navigate([''])
      }
    )
  }

}
