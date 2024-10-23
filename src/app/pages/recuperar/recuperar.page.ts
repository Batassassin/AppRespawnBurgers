import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  correoRecuperar: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  recuperarContrasena() {
    if (this.correoRecuperar) {
      alert('Se ha enviado un enlace de recuperación a su correo.');
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, ingrese su correo electrónico.');
    }
  }

  retroceder() {
    this.router.navigate(['/login']); // Cambia la ruta según tu necesidad
  }
}
