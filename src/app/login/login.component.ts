import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  dniType: string = '';
  dni: string = '';
  password: string = '';
  login() {
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al backend y manejar la respuesta.
  }
}
