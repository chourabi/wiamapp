import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent implements OnInit {

  errMsg='';
  successMsg='';

  clients= [];

  pform = new FormGroup({
    name: new FormControl('',Validators.required),
    start_date: new FormControl('',Validators.required),
    end_date: new FormControl(''),
    country: new FormControl('',Validators.required),
    clientId: new FormControl('',Validators.required),
    activity: new FormControl('',Validators.required),
    
  })

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployeeList() 
  }

  getEmployeeList(){
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }

    this.api.getClientsList().subscribe((data:any)=>{
      console.log(data);
      
      this.clients = data;
    })

  }

  add(){
    this.errMsg="";
    this.successMsg="";

    this.api.addNewProject(this.pform.value).subscribe((data)=>{
      console.log(data);
      this.successMsg="projet créé avec succès.";
        this.pform.reset();
      
    },(err)=>{
      this.errMsg="Veuillez vérifier les données du projet et réessayer."
    })
  }

}
