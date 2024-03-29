import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { SEstudiosService } from '../../service/s-estudios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit {

  nombreEs!: string
  descripcionEs!: string
  estudio!: Estudios

  constructor(private sEstudio: SEstudiosService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.estudio = new Estudios(this.nombreEs, this.descripcionEs)
    this.sEstudio.save(this.estudio).subscribe(data =>{
      alert("¡Estudio agregado exitosamente!")
      this.router.navigate([''])
    },
    err =>{
      alert("Ups, tuvimos un incoveniente para realizar la operación.\n Por favor, intenta nuevamente...")
      this.router.navigate([''])
    })
  }

}
