import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUsuario } from 'src/model/new-usuario.model';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  implements OnInit {
  nuevoUsuario: NewUsuario = new NewUsuario();
  tiposDocumento = ['DNI', 'CEDULA', 'PASAPORTE', 'OTRO'];
  errorMsj = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.nuevo(this.nuevoUsuario).subscribe(
      (response) => {
       
        this.router.navigate(['/login']); 
      },
      (error) => {
        this.errorMsj = error.mensaje
        console.error('Error en el registro:', this.errorMsj);
        
        
      }
    );
  }
}
