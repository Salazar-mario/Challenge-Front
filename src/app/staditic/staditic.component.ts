import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-staditic',
  templateUrl: './staditic.component.html',
  styleUrls: ['./staditic.component.css']
})
export class StaditicComponent {

  @Input() titulo: string = "";
  @Input() balance: any;
  @Input() color: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
