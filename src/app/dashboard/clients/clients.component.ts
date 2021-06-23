import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:any = [];


  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployeeList() 
  }

  getEmployeeList(){
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }

    this.api.getClientsList().subscribe((data)=>{
      console.log(data);
      
      this.clients = data;
    })

  }

}
