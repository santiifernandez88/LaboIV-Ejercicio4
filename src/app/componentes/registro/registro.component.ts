import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule, ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  Register()
  {
    if(this.username == "" && this.password == "")
    {
      this.goTo("error");
    }
    else
    {
      const usuario : Usuario = {
        username: this.username,
        password: this.password
      };
      const usuarioStr = JSON.stringify(usuario);
      localStorage.setItem("Usuario", usuarioStr);
      this.goTo("bienvenido");
    }
  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

}
