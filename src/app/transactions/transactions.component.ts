import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  showTransactionModal = false;
submitTransaction() {
throw new Error('Method not implemented.');
}
  @Input() transaccion: any;
  transactionForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public userService:UserService) {
    this.transactionForm = this.formBuilder.group({
      monto: ['', [Validators.required, Validators.min(0.01)]],
      tipo: ['', Validators.required],
      fecha: ['', Validators.required],
      usuario_id: ['', Validators.required],
      usuario_destinatario_id: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  convertirFecha(fecha: number[]): {
    fechaFormateada: string;
    horaFormateada: string;
  } {
    const [anio, mes, dia, horas, minutos, segundos] = fecha;
    const meses = [
      'ene',
      'feb',
      'mar',
      'abr',
      'may',
      'jun',
      'jul',
      'ago',
      'sep',
      'oct',
      'nov',
      'dic',
    ];
    const nombreMes = meses[mes - 1];
    const fechaFormateada = `${dia} ${nombreMes} ${anio}`;
    const horas12 = horas > 12 ? horas - 12 : horas;
    const amPm = horas >= 12 ? 'PM' : 'AM';
    const horaFormateada = `${horas12.toString().padStart(2, '0')}:${minutos
      .toString()
      .padStart(2, '0')}.${segundos.toString().padStart(2, '0')} ${amPm}`;

    return { fechaFormateada, horaFormateada };
  }

  obtenerEstilosYIcono(tipo: string): { clase: string; icono: string } {
    const esSaliente = tipo === 'egreso';
    const clase = esSaliente ? 'saliente-transaction' : 'entrante-transaction';
    const icono = esSaliente ? 'arrow_upward' : 'arrow_downward';

    return { clase, icono };
  }
  
  getTextColor(estado: string): string {
    switch (estado) {
      case 'Completado':
        return '#4BA38D'; 
      case 'Cancelado':
        return '#EC595B'; 
      case 'Pendiente':
        return 'grey'; 
      default:
        return 'black'; 
    }
  }


  test(){
    this.transactionForm.get("fecha")?.setValue(new Date())
    console.log("DATOS:",this.transactionForm.value);
  }

  realizarTransaccion(){
this.userService.hacerTransaccion(this.transactionForm.value)
  }
  openTransactionModal() {
    this.showTransactionModal = true;
  }

  closeTransactionModal() {
    this.showTransactionModal = false;
  }
  
}
