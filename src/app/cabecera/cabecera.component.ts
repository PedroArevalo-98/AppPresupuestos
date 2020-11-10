import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }
  //Usamos inputs para porque estas variables recibirán los valores del componente padre app
  @Input() Presupuesto:number;
  @Input() IngresosTotales:number;
  @Input() GastosTotales:number;
	@Input() porcentajeTotal:number;
  ngOnInit(): void {
  }

}
