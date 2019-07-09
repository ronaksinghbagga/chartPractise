import { Component,OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chartSample1';
  LineChart;
  animationProgress;

  
  ngOnInit(){ 
    this.LineChart = new Chart('lineChart', {
      type: 'line',
      data:{
        labels:["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],//"July", "August", "September", "October", "November", "December"
        datasets:[{
              label: 'Sales',
              data:[2,7,4,1,9,6,2,8,5,9,4,7],//7,7,5,6,8,9
              fill: false,
              lineTension:0.2,
              borderColor: "#fff",
              pointBackgroundColor:"#ccd1d1",
              borderWidth:1,
              pointStyle:'circle',
              pointBorderWidth:3
                 }]
          },
      options:{
        responsive: true,
        title:{
          text:"Sales Chart of the year 2018",
          display:true,
          fontColor:'#fff',
          position:"bottom"
      },
      layout:{
        padding:{
          left:20,
          right:30,
          top:100,
          bottom:0
        }
        
      },
      animation:{
        duration:1000,
        easing:'easeInOutQuad'
      },
      legend:{
        display:false
      },
      tooltips:{
        mode:'index',
        intersect: false,
        cornerRadius:10,
        backgroundColor:"#17202a",
        titleFontSize:18,
        bodyFontSize:15
      },
      
      hover: {
        mode: 'nearest',
        intersect: true
      },
// x axis and y axis config code is below 
      scales: {
        xAxes: [{
          display: true,
          ticks:{
              fontColor:'#fff',
              fontSize:15,
              beginAtZero:true
          },
          scaleLabel: {
            display: true,
            labelString: 'Month',
            fontColor:'#fff',
            fontSize:20,
          },
          gridLines:{
            drawOnChartArea:false
          },
          
        }],
        yAxes: [{
          display: true,
          ticks:{
            beginAtZero:true,
            fontColor:'#fff',
            fontSize:15,
            // stepSize:2
          },
          scaleLabel: {
            display: true,
            labelString: 'Value',
            fontColor:'#fff',
            fontSize:20
          },
          gridLines:{
            drawOnChartArea:false
          }
        }]
      }
    }
    });
  
  }
}
