import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboral } from 'src/app/model/experiencia-laboral';
import { SExperienciaLaboralService } from 'src/app/service/s-experiencia-laboral.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  experienciaLaboral: ExperienciaLaboral[] = [];
  isLogged = false
 /*  estaVacio = false */
 

  constructor(private sExperienciaLaboral: SExperienciaLaboralService, private tokenService: TokenService ) { }

  ngOnInit(): void {
    this.cargaExperiencia();
/*     alert("index: " + this.experienciaLaboral.length)
    if(this.experienciaLaboral.length === 0){
      this.estaVacio = true
      console.log()
    }else{
      this.estaVacio = false
    } */
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargaExperiencia(): void{
    this.sExperienciaLaboral.lista().subscribe( data => {this.experienciaLaboral = data});
  }

  delete(id: number){
    if(id != undefined){
      this.sExperienciaLaboral.delete(id).subscribe(data =>{
        this.cargaExperiencia()
        alert("La experiencia se borró exitosamente...")
      },err =>{
        alert("No se pudo borrar la experiencia.")
      })
    }
  }

}
