import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { SEstudiosService } from 'src/app/service/s-estudios.service';

@Component({
  selector: 'app-edit-estudios',
  templateUrl: './edit-estudios.component.html',
  styleUrls: ['./edit-estudios.component.css']
})
export class EditEstudiosComponent implements OnInit {
  
  estudios: Estudios = null

  constructor(private sEstudio: SEstudiosService, private activateRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id']
    this.sEstudio.detail(id).subscribe(data =>{
      this.estudios = data
    },
    err =>{
      alert("Ups! Se produjo un error al realizar la operación.\nPor favor, intenta nuevamente...")
      this.router.navigate([''])
    })
  }

    onUpdate(): void{
      const id = this.activateRouter.snapshot.params['id']
      this.sEstudio.update(id, this.estudios).subscribe( data =>{
        alert("El Estudio se ha actualizado con éxito...")
        this.router.navigate([''])
      },
      err =>{
        alert("Ups! Se produjo un error al realizar la operación.\nPor favor, intenta nuevamente...")
        this.router.navigate([''])
      })
    }
  

}
