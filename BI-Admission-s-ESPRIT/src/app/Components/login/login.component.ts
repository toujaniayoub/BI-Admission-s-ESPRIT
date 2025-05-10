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
    const emailInput = (document.getElementById('floatingInput') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('floatingInput1') as HTMLInputElement).value;

    // Login for dashboard_admission
    if (emailInput === 'addmision-employability@esprit.tn' && passwordInput === 'azerty') {
      this.router.navigate(['/dashboard']);
    } 
    // Login for dashboard
    else if (emailInput === 'admin@esprit.tn' && passwordInput === 'admin123') {
      this.router.navigate(['/dashboard_admission']);
    } 
    else {
      alert('Invalid credentials');
    }
  }
}
