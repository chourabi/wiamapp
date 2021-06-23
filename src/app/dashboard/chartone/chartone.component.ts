import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-chartone',
  templateUrl: './chartone.component.html',
  styleUrls: ['./chartone.component.css']
})
export class ChartoneComponent implements OnInit {
  /*public lineChartData =  [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Pojects' },
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public lineChartOptions:   {
    responsive: true,
  };

  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];*/

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: ChartType = 'line';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [20 , 15 , 30,60], label: 'Approved', stack: 'a' }, 
  ];
  public barChartLabels: string[] = ['P', 'R', 'B','C'];
 
 



  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initProjectPerClientPie();
  }


  initProjectPerClientPie(){ 

    let today = new Date();
    let yearsTable = [
      
      {
        year:today.getFullYear()-4,
        nbr:0
      },
      {
        year:today.getFullYear()-3,
        nbr:0
      },
      {
        year:today.getFullYear()-2,
        nbr:0
      },
      {
        year:today.getFullYear()-1,
        nbr:0
      },
      {
        year:today.getFullYear(),
        nbr:0
      },
       
      
      
    ];

    console.log(yearsTable);
    


    let res = [];

    this.api.getProjectsList().subscribe((data:any[])=>{
       
      for (let j = 0; j < data.length; j++) {
        
        const year = new Date(data[j].start_date).getFullYear();

         

        // boucle all

        for (let i = 0; i < yearsTable.length; i++) {
          const yearDate = yearsTable[i];

          // search for the year and increment by one
          if (yearDate.year == year) {
            yearDate.nbr = yearDate.nbr +1;
          }

           
        }
 
        
      }
 

      var data = [];
      var label = [];


      for (let l = 0; l < yearsTable.length; l++) {
        data.push(yearsTable[l].nbr);
        label.push(yearsTable[l].year);
        

      }

      this.barChartData = [
        {data:data,label:'Projet / annee '}
      ]

      this.barChartLabels = label;
      

      

      
    })
  }
}
