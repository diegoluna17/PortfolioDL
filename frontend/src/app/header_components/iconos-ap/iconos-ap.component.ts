import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iconos-ap',
  templateUrl: './iconos-ap.component.html',
  styleUrls: ['./iconos-ap.component.css']
})
export class IconosApComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }
}
