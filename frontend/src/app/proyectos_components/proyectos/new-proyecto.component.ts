import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent {

  proyecto: Proyecto = new Proyecto("","","")
  static id: number = 0

  constructor(private sProyecto: SProyectosService, private activateRouter: ActivatedRoute, private router: Router, public imageService: ImageService){}

  ngOnInit(): void{   
  }

  onCreate(): void{
    
    this.proyecto.img = this.imageService.url
    this.sProyecto.save(this.proyecto).subscribe( data =>{
      alert("Proyecto añadido correctamente...")
      this.router.navigate([''])
    }, err =>{
      alert("Ups, creo que ocurrio un problema. Intenta nuevamente");
        this.router.navigate(['']); 
    })
  }
  


  uploadImage($event: any){
    NewProyectoComponent.id++
    const name = "proyecto_" + NewProyectoComponent.id
    this.imageService.uploadImage($event, name)
  }
}
