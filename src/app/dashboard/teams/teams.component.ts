import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(){
    this.api.getTeamsList().subscribe((d:any[])=>{
      this.teams = d;
    })
  }

  deleteTeam(id){
    this.api.deleteTeam(id).subscribe(()=>{
      this.getTeams();
    },(err)=>{
      alert("oups")
    })
  }

}
