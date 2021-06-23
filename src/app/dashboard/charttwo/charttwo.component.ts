import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-charttwo',
  templateUrl: './charttwo.component.html',
  styleUrls: ['./charttwo.component.css']
})
export class CharttwoComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['g'];
  public pieChartData: SingleDataSet = [20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  

  
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.initProjectPerClientPie();
  }


  initProjectPerClientPie(){
    /*
 
    client: {id: 1, name: "Samsung"}
country: "tunis"
end_date: "2021-07-10"
files: (5) [{…}, {…}, {…}, {…}, {…}]
id: 1
name: "project x"
start_date: "2021-06-07"
    */

    let res = [];

    this.api.getProjectsList().subscribe((data:any[])=>{
       
      for (let j = 0; j < data.length; j++) {
        
        const client = data[j].client;
        var d = {
          client:client.name,
          nbrProjects: 0
        }

        // boucle all

        for (let i = 0; i < data.length; i++) {
          const project = data[i];

          if (project.client.id == client.id) {
            d.nbrProjects = d.nbrProjects +1;
          }
          
        }

        
        let weCanAdd = true;

        for (let k = 0; k < res.length; k++) {
          const od = res[k];
          if (od.client == d.client) {
            weCanAdd = false;
          }
          
        }


        if (weCanAdd) {
          res.push(d);
        }
        
      }

      console.log(res);

      var data = [];
      var label = [];


      for (let l = 0; l < res.length; l++) {
        const element = res[l];
        data.push(element.nbrProjects);
        label.push(element.client);
        
      }

      this.pieChartData = data

      this.pieChartLabels = label;
      

      

      
    })
  }
}


 
