import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjet',
  templateUrl: './tarjet.component.html',
  styleUrls: ['./tarjet.component.css']
})
export class TarjetComponent implements OnInit {
  @Input() tarjeta: any; 
  @Input() balance: any;
  constructor() { }
  

   
  ngOnInit(): void {
  }
  ocultarNumeroTarjeta(numero: string): string {
    const numeroVisible = numero.trim().replace(/\s/g, ''); 
    const ultimosCuatroDigitos = numeroVisible.slice(-4);
    const gruposAnteriores = numeroVisible.slice(0, -4).replace(/\d/g, '*'); 
    const gruposOcultos = gruposAnteriores.replace(/(.{4})/g, '$1 '); 
    return gruposOcultos + ultimosCuatroDigitos;
  }
   convertirFecha(fecha: number[]): string {
    const [anio, mes] = fecha;
    return `${mes.toString().padStart(2, '0')}/${anio}`;
  }
  
  
}
