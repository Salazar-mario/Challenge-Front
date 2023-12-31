import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  montoTotal: number;
  position: number;
  cuotas: string;
  fechaEmision: string;
  mensual: string;
  tasaInteres: string;
  estado: string;
  actions:any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    montoTotal: 1800.0,
    cuotas: 'Cuota 10-24',
    fechaEmision: 'Agosto 03, 2023',
    mensual: '51.036',
    tasaInteres: '20%',
    estado: 'Pagar',
    actions:"",
  },
  {
    position: 2,
    montoTotal: 500.0,
    cuotas: 'Cuota 24-24',
    fechaEmision: 'septiembre 25, 2023',
    mensual: '50.000',
    tasaInteres: '10%',
    estado: 'Cancelado',
    actions:"",
  },
];

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class paymentComponent implements OnInit {
  displayedColumns: string[] = [
    'select',
    'montoTotal',
    'cuotas',
    'fechaEmision',
    'mensual',
    'tasaInteres',
    'estado',
    'actions',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  ngOnInit() {}

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.position + 1
    }`;
  }
}