import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'employability@esprit.tn' && this.password === 'azerty') {
      this.router.navigate(['/dashboard']);
    } else if (this.email === 'admission@esprit.tn' && this.password === 'admin123') {
      this.router.navigate(['/dashboard_admission']);
    } else {
      alert('Invalid credentials');
    }
  }

  handleCheckboxClick(event: Event): void {
    if (!this.email || !this.email.includes('@')) {
      (event.target as HTMLInputElement).checked = false;
      alert('Veuillez d\'abord entrer une adresse email valide.');
    }
  }
}