import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

import { Input } from '@angular/core';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label='';
  @Input() total='';
  @Input() percentage='';
  Highcharts = Highcharts;
  @Input() data='';
  chartOptions= {};

  constructor() { }

  ngOnInit(): void { 
    this.chartOptions={
    chart: {
      type: 'area',
      backgroundColor:null,
      borderWidth:0,
      margin:[2,2,2,2],
      height:90,
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },

    tooltip: {
      split: true,
      outside:true
    },
    credits:{
      enabled:false,
    },
    legend:{
      enabled:false,
    },
    exporting:{
      enabled:false,
    },
    xAxis:{
      labels:{
        enabled:false,
      },
      title:{
        text:null,
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[],
    },
    yAxis:{
      labels:{
        enabled:false,
      },
      title:{
        text:null,
      },
      startOnTick:false,
      endOntick:false,
      tickOptions:[],
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: '#666666'
        }
      }
    },
    series: [{
      data: this.data
    }]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(new Event('resize'));
  }, 300);
}

}
