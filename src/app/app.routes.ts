import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';

export const routes: Routes = [

    { path: '', redirectTo: '/registro', pathMatch: "full" },
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'error', component: ErrorComponent },


];
