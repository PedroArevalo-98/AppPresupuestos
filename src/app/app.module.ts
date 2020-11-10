import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { GastoComponent } from './gasto/gasto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresoServicioService } from './ingreso/ingreso-servicio.service';
import { GastoServicioService } from './gasto/gasto-servicio.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    IngresoComponent,
    GastoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [IngresoServicioService,GastoServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
