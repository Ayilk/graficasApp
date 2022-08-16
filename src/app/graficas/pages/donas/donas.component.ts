import { Component} from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styles: [
  ]
})
export class DonasComponent  {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ],
        backgroundColor: ['#6405F0','#0724E3', '#05A0F0'] 
      },
      // { data: [ 50, 150, 120 ] },
      // { data: [ 250, 130, 70 ] }
    ],
   
  };

  public doughnutChartType: ChartType = 'doughnut';
 

}
