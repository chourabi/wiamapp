import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-teams-add',
  templateUrl: './teams-add.component.html',
  styleUrls: ['./teams-add.component.css']
})
export class TeamsAddComponent implements OnInit {

  errMsg='';
  successMsg='';

  form = new FormGroup({
    name: new FormControl('',Validators.required)
  })
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  addTeam(){
    this.errMsg="";
    this.api.addTeam(this.form.value).subscribe((data:any)=>{
      if (data.id) {
        this.router.navigate(['/dashboard/home/admin-teams'])
      }else{
        this.errMsg = "oups !"
      }
    },(err)=>{
      this.errMsg = "oups !"
    })
  }
  

}
