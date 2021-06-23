import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css']
})
export class ClientsAddComponent implements OnInit {

  errMsg='';
  successMsg='';

  form = new FormGroup({
    name: new FormControl('',Validators.required)
  })
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    this.errMsg="";
    this.api.addNewClient(this.form.value).subscribe((data:any)=>{
      if (data.id) {
        this.router.navigate(['/dashboard/home/clients'])
      }else{
        this.errMsg = "oups !"
      }
    },(err)=>{
      this.errMsg = "oups !"
    })
  }
  
}
