import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = []; 

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create(); 
  }

  async saveUser(nombre: string, email: string, contrasena: string) {
    const user = { nombre, email, contrasena };
    this.users.push(user); 
    await this.storage.set(email, user); 
  }

  async getUser(email: string) {
    return await this.storage.get(email); 
  }

  async validateUser(email: string, contrasena: string): Promise<boolean> {
    const user = await this.getUser(email);
    return user && user.contrasena === contrasena; 
  }
}
