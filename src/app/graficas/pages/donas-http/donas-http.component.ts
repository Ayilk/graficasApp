import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-donas-http',
  templateUrl: './donas-http.component.html',
  styles: [
  ]
})
export class DonasHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [ ],
        backgroundColor: ['#6405F0','#0724E3', '#05A0F0'] 
      },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ],
   
  };

  public doughnutChartType: ChartType = 'doughnut';
 

  constructor(private graficaService: GraficasService) { }

  ngOnInit(): void {
    // this.graficaService.getUsuariosRedesSociales()
    // .subscribe(data => {
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const values = Object.values(data);
    //   console.log(values);
    //   //console.log(labels)

    //  this.doughnutChartData = {
    //   labels: Object.keys(data),
    //   datasets: [{data: Object.values(data)}]
    //  }
    // })

    this.graficaService.getUsuariosRedesSocialesDonaData()
    .subscribe(({ labels, datasets }) => {
      // console.log(data);
      this.doughnutChartData = { labels, datasets };
    });
  }

}
