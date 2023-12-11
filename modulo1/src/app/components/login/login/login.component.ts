import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public title: string;
  public mensajeError: string;

  constructor(public authService: AuthService){}
 
  ngOnInit(): void {
    this.title = "Bienvenido";
    this.mensajeError = '';
  }

  public login(username: string, password: string): boolean{
    if (!this.authService.login(username, password)) {
      this.mensajeError = 'Login incorrecto';
      setTimeout(function() {
        this.mensajeError = '';
      }.bind(this), 25000);
      return true;
    } else {
      return false;
    }
  }

  public logout(){
    this.authService.logout();
    return false;
  }

}
