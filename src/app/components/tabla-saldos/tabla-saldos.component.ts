import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-saldos',
  templateUrl: './tabla-saldos.component.html',
  styleUrls: ['./tabla-saldos.component.scss']
})
export class TablaSaldosComponent implements OnInit {

  cargarArchivos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  habilitarCargaArchivos() {
    this.cargarArchivos = !this.cargarArchivos
  }

}
