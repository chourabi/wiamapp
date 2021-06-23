import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-teams-edit',
  templateUrl: './teams-edit.component.html',
  styleUrls: ['./teams-edit.component.css']
})
export class TeamsEditComponent implements OnInit {

  id;
  errMsg='';
  successMsg='';

  form = new FormGroup({
    name: new FormControl('',Validators.required)
  })

  addE= new FormGroup({
    user_id: new FormControl('',Validators.required)
  })

  employees= [];

  affectedEmployees = [];



  constructor(private route:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getEmployees();
    this.getTeam();
    this.getAffectedEmployees();
  }

  getTeam(){
    this.api.getTeam(this.id).subscribe((team:any)=>{
      delete team.id;
      this.form.setValue(team);
    })
  }

  update(){
    this.api.updateTeam(this.id,this.form.value).subscribe((team:any)=>{
      this.successMsg="équipe mise à jour avec succès"
    })
  }

  getEmployees(){
    this.api.getEmployeesList().subscribe((data:any)=>{
      this.employees = data;
    })
  }




  affectEmpoyeeToTeam(){
    this.api.affectEmpoyeeToTeam(this.addE.value.user_id,this.id).subscribe((data)=>{
      console.log(data);
      this.getAffectedEmployees();
    })
  }


  getAffectedEmployees(){
    this.api.getAffectedEmployeeToTeam(this.id).subscribe((data:any)=>{
      console.log("hi !",data);
      
      this.affectedEmployees = data;
    })
  }


  deleteAffect(id){
    this.api.deleteEmployeeAfectation(id).subscribe((data)=>{
      this.getAffectedEmployees();
      
    })
  }
}
