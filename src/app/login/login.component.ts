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
  keyboardVisible: boolean = false; // Variable para controlar la visibilidad del teclado virtual


  login() {
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al backend y manejar la respuesta.
  }
  toggleKeyboard() {
    // Esta función se llama para alternar la visibilidad del teclado virtual
    this.keyboardVisible = !this.keyboardVisible;
  }
}
