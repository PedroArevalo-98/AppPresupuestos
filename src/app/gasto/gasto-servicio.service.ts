import { Injectable } from '@angular/core';
import { Gasto } from "./gasto.model";
@Injectable({
  providedIn: 'root'
})
export class GastoServicioService {

  gastos:Gasto[]=[
    new Gasto("Renta Apartamento",900),
    new Gasto("Ropa",435.28)
  ]
  
  constructor() { }
  eliminar(gasto:Gasto){
		const indice:number=this.gastos.indexOf(gasto);
		this.gastos.splice(indice,1);

	}
}
