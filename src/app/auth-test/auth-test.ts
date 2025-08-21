import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth-test',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './auth-test.component.html'
})
export class AuthTestComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      this.message = 'Inscription réussie ✅';
    } catch (error: any) {
      this.message = 'Erreur : ' + error.message;
    }
  }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.message = 'Connexion réussie ✅';
    } catch (error: any) {
      this.message = 'Erreur : ' + error.message;
    }
  }

  async logout() {
    try {
      await this.authService.logout();
      this.message = 'Déconnexion réussie ✅';
    } catch (error: any) {
      this.message = 'Erreur : ' + error.message;
    }
  }
}
