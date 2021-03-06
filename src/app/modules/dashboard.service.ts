import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  x:any=12;
  constructor() { }
  bigChart(){
    return [{
      name: 'rmilat',
      data: [502, 635, 809, 947, 1402, 3634, 7000]
    }, {
      name: 'medina',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'birchifa',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'mesnana',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Msala',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards(){
    return[55,50,40,52,40,this.x];
  }

  Pie(){
    return [{
      name: 'Brands',
      colorByPoint: true,
      data: [{
          name: 'Chrome',
          y: 11.84,
          sliced: true,
          selected: true
      }, {
          name: 'Internet Explorer',
          y:61.41
      }, {
          name: 'Firefox',
          y: 10.85
      }, {
          name: 'Edge',
          y: 4.67
      }, {
          name: 'Safari',
          y: 4.18
      }, {
          name: 'Sogou Explorer',
          y: 1.64
      }, {
          name: 'Opera',
          y: 1.6
      }, {
          name: 'QQ',
          y: 1.2
      }, {
          name: 'Other',
          y: 2.61
      }]
  }]
  }
}
