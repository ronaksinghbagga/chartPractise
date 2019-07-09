import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-chart',
  templateUrl: './google-chart.component.html',
  styleUrls: ['./google-chart.component.css']
})
export class GoogleChartComponent implements OnInit {

  title = 'Average Temperatures of Cities';
   type = 'LineChart';
   data = [
    ["Jan",  7.0],
    ["Feb",  6.9],
    ["Mar",  9.5],
    ["Apr",  14.5],
    ["May",  18.2],
    ["Jun",  21.5],
    ["Jul",  25.2],
    ["Aug",  26.5],
    ["Sep",  23.3],
    ["Oct",  18.3],
    ["Nov",  13.9],
    ["Dec",  9.6]
   ];
   columnNames = ["Month", "Tokyo"];
   options = {  
     colors: ['#e0440e'], is3D: true,
     
    hAxis:{
      title: 'Month',
      
    },
    VAxis:{
      title: 'Temprature',
      gridlines:{
        color:'none'
      }
    },
    curveType: 'function',
    legend: { position: 'bottom' },
    pointSize:10

   };
   width = 850;
   height = 400;
  constructor() { }

  ngOnInit() {
    
  }

}
