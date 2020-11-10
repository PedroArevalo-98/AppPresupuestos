import { Component } from '@angular/core';
import { IngresoServicioService } from "./ingreso/ingreso-servicio.service";
import { GastoServicioService } from "./gasto/gasto-servicio.service";
import { Gasto } from "./gasto/gasto.model";
import { Ingreso } from "./ingreso/ingreso.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ingresos: Ingreso[]=[];
  gastos: Gasto[]=[];
  title = 'presupuesto-app';
  constructor(private ingresoServicio:IngresoServicioService,private egresoServicio: GastoServicioService){
  	this.ingresos=ingresoServicio.ingresos;
  	this.gastos=egresoServicio.gastos;
  }
  getIngresoTotal(){
  	let ingresoTotal:number=0;
  	this.ingresos.forEach(ingreso => {
  		ingresoTotal+= ingreso.valor;
  	});
  return ingresoTotal;
  }
  getEgresoTotal(){
  	let egresoTotal:number=0;
  	this.gastos.forEach(egreso => {
  		egresoTotal+= egreso.valor;
  	});
  return egresoTotal;
  }
  getPorcentajeTotal(){
  	return this.getEgresoTotal()/this.getIngresoTotal();
  }
  getPresupuestoTotal(){
  	return this.getIngresoTotal()-this.getEgresoTotal();
  }
}
