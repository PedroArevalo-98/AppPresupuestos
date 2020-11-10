import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import{Ingreso} from './ingreso.model';
@Injectable({
  providedIn: 'root'
})
export class IngresoServicioService {

  constructor() { }
  ingresos:Ingreso[]=[
    new Ingreso("Salario",2100.00),
    new Ingreso("Venta Carro",1500)
    ];
    eliminar(ingreso:Ingreso){
      const indice: number = this.ingresos.indexOf(ingreso);
      this.ingresos.splice(indice,1);
    }
}
