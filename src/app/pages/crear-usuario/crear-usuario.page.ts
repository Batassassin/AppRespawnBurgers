import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {
  nuevoNombre: string = '';
  nuevoEmail: string = '';
  nuevaContrasena: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  async crearCuenta() {
    if (this.nuevoEmail && this.nuevaContrasena && this.nuevoNombre) {
      await this.authService.saveUser(this.nuevoNombre, this.nuevoEmail, this.nuevaContrasena);
      alert(`Cuenta creada con éxito para ${this.nuevoNombre}!`);
      this.router.navigate(['/login']);
    } else {
      alert('Por favor, complete todos los campos.');
    }
  }

  retroceder() {
    this.router.navigate(['/login']);
  }
}
