import { Component, OnInit } from '@angular/core';
import { Ingreso } from "./ingreso.model";
import {IngresoServicioService  } from "./ingreso-servicio.service";
@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];
  constructor(private ingresoServicio:IngresoServicioService) { }

  ngOnInit(): void {
    this.ingresos=this.ingresoServicio.ingresos;
  }
  eliminarR(ingreso:Ingreso){
    this.ingresoServicio.eliminar(ingreso);
  }
}
