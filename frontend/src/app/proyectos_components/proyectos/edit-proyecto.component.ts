import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent {
  proyecto: Proyecto
  name: string
  
  constructor(private sProyecto: SProyectosService,  private activateRouter: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params["id"]
    this.sProyecto.detail(id).subscribe(data =>{
      this.proyecto = data
      this.name = this.proyecto.nombre
    },
    err =>{
      alert("Ups! Se produjo un error al realizar la operación.\nPor favor, intenta nuevamente...")
      this.router.navigate([''])
    })
  }

  onUpdate(){
    const id = this.activateRouter.snapshot.params['id']
    this.proyecto.img = this.imageService.url
      this.sProyecto.update(id, this.proyecto).subscribe( data =>{
        alert("El proyecto se ha modificado correctamente...")
        this.router.navigate([''])
      },
      err =>{
        alert(err)
        this.router.navigate([''])
      })
  }

  uploadImage($event: any){
    this.imageService.uploadImage($event, this.name)
  }

}
