import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasDobleComponent } from './pages/barras-doble/barras-doble.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonasHttpComponent } from './pages/donas-http/donas-http.component';
import { DonasComponent } from './pages/donas/donas.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'barra', component: BarrasComponent},
      {path: 'barra-doble', component: BarrasDobleComponent},
      {path: 'dona', component: DonasComponent},
      {path: 'dona-http', component: DonasHttpComponent},
      {path: '**', redirectTo: 'barra'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
