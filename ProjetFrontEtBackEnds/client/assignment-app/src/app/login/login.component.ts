import { Component, OnInit } from '@angular/core';
import { User } from './login.model';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();

  constructor(private authService : AuthService,
    public router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin() {
    let isValidUser: Boolean = this.authService.SignIn(this.user);

    if(isValidUser)
        this.router.navigate(['/home']);  
    else
        alert('Login ou mot de passe incorrecte!');
  }

}
