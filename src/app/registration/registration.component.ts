import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registro = {
    nombre: '',
    apellido: '',
    clave: '',
    imagenUrl: ''
  };

  onSubmit() {
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a un servidor o guardarlos localmente.
    console.log('Datos del registro:', this.registro);
  }
}
