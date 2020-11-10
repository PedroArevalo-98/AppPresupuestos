import { Component, OnInit } from '@angular/core';
import { IngresoServicioService } from "../ingreso/ingreso-servicio.service";
import { GastoServicioService } from "../gasto/gasto-servicio.service";
import { Gasto } from "../gasto/gasto.model";
import { Ingreso } from "../ingreso/ingreso.model";
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string="ing";
  descripcionInput:string;
  valorInput:number;
  constructor(private ingresoServicio:IngresoServicioService,private gastoServicio:GastoServicioService) { }

  ngOnInit(): void {
  }
  tipoOperacion(evento){
  	this.tipo=evento.target.value;
  }
  agregarValor(){
  	if(this.tipo==="ing"){
  		this.ingresoServicio.ingresos.push(new Ingreso(this.descripcionInput,this.valorInput));
  	}else{
  		this.gastoServicio.gastos.push(new Gasto(this.descripcionInput,this.valorInput));
  	}
  }

}
