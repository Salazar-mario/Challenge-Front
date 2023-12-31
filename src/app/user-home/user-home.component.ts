import { UserService } from './../../service/user.service';
import { User } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/../service/token.service';
import { Tarjeta } from 'src/app/../model/tarjeta.model';
import { Transaccion } from 'src/app/../model/transacciones.model';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit {
  tarjeta: Tarjeta = new Tarjeta(
    '1234 5678 9012 3456',
    [2025, 11, 1],
    '123',
    'Juan Delgadillo'
  );

  sender = new User('Juan', 'Delgadillo', 0, [], [], 0);
  recipient = new User('Lara', 'Arroyo', 0, [], [], 0);

  transaccion = new Transaccion(
    1000,
    'ingreso',
    [2023, 7, 18, 16, 44, 49, 901476000],
    this.sender,
    this.recipient,
    "Pendiente",               

  );

  transaccion2 = new Transaccion(
    500,
    'egreso',
    [2023, 7, 18, 16, 44, 49, 954686600],
    this.sender,
    this.recipient,
    "Cancelado",               

  );

  user: User = new User(
    '',
    '',
    0,
    [this.transaccion, this.transaccion2],
    [this.tarjeta],
    0
  );
  constructor(
    public userService: UserService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    this.cargarTransacciones();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.userService.details(1).subscribe(
      (data) => {
        this.user = data;
      },
      (error) => {
        console.log('Error al cargar el usuario', error);
      }
    );
  }

  cargarTransacciones(): void {
    this.userService.transactions(1).subscribe(
      (data) => {
        this.user.transacciones = data;
      },
      (error) => {
        console.log('Error al cargar el usuario', error);
      }
    );
  }
}
