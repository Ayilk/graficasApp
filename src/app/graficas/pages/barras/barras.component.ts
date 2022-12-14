import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: [
  ]
})
export class BarrasComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,    
  };
  public barChartType: ChartType = 'bar';
  
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#F62AD2', hoverBackgroundColor:'#B524D4' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B',backgroundColor: '#9733EB', hoverBackgroundColor:'#5524D4' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series C',backgroundColor: '#2B2AF6', hoverBackgroundColor:'#0E2AF6' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }


  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),

       ];
       this.barChartData.datasets[1].data = [
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),
        Math.round( Math.random()*100),

       ];

    this.chart?.update();
  }

  
}
