import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-tabla-compra',
  templateUrl: './tabla-compra.component.html',
  styleUrls: ['./tabla-compra.component.scss']
})
export class TablaCompraComponent implements OnInit {

  @Input() data: any[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
