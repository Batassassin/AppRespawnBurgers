import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: string = "";
  loginContrasena: string = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() { }

  async iniciarSesion() {
    if (this.loginUsuario && this.loginContrasena) {
      const isValid = await this.authService.validateUser(this.loginUsuario, this.loginContrasena);
      if (isValid) {
        this.router.navigate(['/inicio'], { state: { usuario: this.loginUsuario } });
      } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    } else {
      alert('Por favor, ingresa tus credenciales.');
    }
  }

  async recuperarContrasena() {
    console.log('Navegando a recuperar contraseña...');
    try {
      await this.router.navigateByUrl('/recuperar');
      console.log('Navegación a recuperar contraseña exitosa');
    } catch (error) {
      console.error('Error en navegación:', error);
    }
  }

  async nuevaCuenta() {
    console.log('Intentando navegar a crear-usuario...');
    try {
      await this.router.navigateByUrl('/crear-usuario', { skipLocationChange: true });
      console.log('Navegación exitosa');
    } catch (error) {
      console.error('Error en navegación:', error);
    }
  }
}