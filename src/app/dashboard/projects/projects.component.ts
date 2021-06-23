import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service'; 


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:any = [];

  /**
   * activity: "this is an awesome project this is an awesome project this is an awesome project this is an awesome project this is an awesome project this is an awesome project "
client: {id: 1, name: "Samsung"}
country: "tunis"
end_date: "2021-07-10"
id: 1
name: "project x"
start_date: "2021-06-07"
   */

  settings = {
    actions:{
      add:false,
      delete:false,
      edit:false
    },
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Nom'
      },
      activity: {
        title: 'Activité'
      },
      country: {
        title: 'Pays'
      },
      

      client: {
        title: 'client'
      },
      start_date: {
        title: 'Date lancement'
      },
      end_date: {
        title: 'Date cloture'
      },
      

    }
  };

  data = [

  ];



  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getProjects();


  }

  getProjects(){
    this.api.getProjectsList().subscribe((data:any[])=>{
      console.log(data);
      this.data = [];

      
      data.forEach((r)=>{
        this.data.push({
          id: r.id,
          name:  r.name,
          client:  r.client.name,
          start_date:  r.start_date,
          end_date:  r.end_date,
          country: r.country,
          activity: r.activity
        });
      })
      

      try {
        
      } catch (error) {
        
      }
    })
  }

  rowClick(e){
    console.log(e);
    this.router.navigate(['/dashboard/home/project/'+e.data.id])
    
  }

}
