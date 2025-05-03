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
    const validEmail = 'addmision-employability@esprit.tn';
    const validPassword = 'azerty';

    const emailInput = (document.getElementById('floatingInput') as HTMLInputElement).value;
    const passwordInput = (document.getElementById('floatingInput1') as HTMLInputElement).value;

    if (emailInput === validEmail && passwordInput === validPassword) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials');
    }
  }
}
