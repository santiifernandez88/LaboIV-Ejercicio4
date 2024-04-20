import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username : string = "";
  password : string = "";
  usuario!: Usuario;

  constructor(private router: Router) {}


  Login()
  {
    if(this.username == "" && this.password == "")
    {
      this.goTo("error");
    }
    else
    {
      const strUsuario = localStorage.getItem("Usuario");
      this.usuario = JSON.parse(strUsuario!);
      if(this.username == this.usuario.username && this.password == this.usuario.password)
      {
        this.goTo("bienvenido")
      }
      else
      {
        this.goTo("error");
      }
    }
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
