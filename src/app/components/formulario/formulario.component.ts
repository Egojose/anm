import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  mineral: string;
  cantidad: string;
  compraArr = []

  minerales: any[] = ['Au', 'Ag', 'Pt']; 

  constructor() { }

  ngOnInit(): void {
  }

  agregar() {
    this.compraArr.push({
      mineral: this.mineral,
      cantidad: this.cantidad
    })
    this.mineral = '';
    this.cantidad = '';
  }

}
