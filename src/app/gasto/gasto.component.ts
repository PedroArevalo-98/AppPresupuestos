import { Component, Input, OnInit } from '@angular/core';
import { Gasto } from "./gasto.model";
import { GastoServicioService } from "./gasto-servicio.service";
@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})
export class GastoComponent implements OnInit {

  gastos:Gasto[]=[];
  @Input() ingresosTotales:number;
  constructor(private gastosServicio:GastoServicioService) { }

  ngOnInit(): void {
    this.gastos=this.gastosServicio.gastos
  }
  eliminarEgreso(gasto: Gasto){
  	this.gastosServicio.eliminar(gasto);
  }
  calcularPorcentaje(gasto:Gasto){
  	return gasto.valor/this.ingresosTotales;
  }

}
