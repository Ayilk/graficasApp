import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonasComponent } from './pages/donas/donas.component';
import { DonasHttpComponent } from './pages/donas-http/donas-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDobleComponent,
    DonasComponent,  
    DonasHttpComponent,
    GraficaBarraComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule
  ]
})
export class GraficasModule { }
