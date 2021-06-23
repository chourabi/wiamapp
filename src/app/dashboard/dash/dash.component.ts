import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';


import { Color, Label, SingleDataSet } from 'ng2-charts';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {



/******************************************************************************** */


projects = [];
employees = [];
teams = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getEmployeesList().subscribe((data:any)=>{
      this.employees = data;
    });
    this.api.getTeamsList().subscribe((d:any[])=>{
      this.teams = d;
    })

    this.api.getProjectsList().subscribe((data:any[])=>{
      console.log(data);
      this.projects = data;
 
    })
  }



}
