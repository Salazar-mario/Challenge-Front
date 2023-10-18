import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet]).pipe(
    map(({ matches }) => {
      if (matches) {
        // En pantallas más pequeñas, mostrar solo la tabla
        return [
          { title: 'Table', cols: 2, rows: 1 }
        ];
      }
      // En pantallas más grandes, definir las filas de tarjetas
      return [
        // Fila 1 con 3 tarjetas iguales
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        // Fila 2 con 2 tarjetas iguales con más ancho (por ejemplo, cols: 2)
        { title: 'Card 4', cols: 2, rows: 1 },
        { title: 'Card 5', cols: 2, rows: 1 },
        // Fila 3 con la tabla
        { title: 'Table', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
