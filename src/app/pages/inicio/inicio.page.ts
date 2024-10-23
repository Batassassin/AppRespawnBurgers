import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuarioNombre: string = '';

  constructor() {}

  ngOnInit() {
    const nombre = localStorage.getItem('nuevoNombre');
    
    if (nombre) {
      this.usuarioNombre = nombre;
    }
  }
}
