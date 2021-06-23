import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project:any;
  teams:any[]=[];

  allTeams:any[]=[];

  affectTeam = new FormGroup({
    id_team : new FormControl('',Validators.required)
  });


  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;



  constructor(private api:ApiService, private route:ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    this.getProjectDetails();
    this.getTeams();

  }


  getProjectDetails(){
    this.progress = 0;

    const id = this.route.snapshot.params.id;

    this.api.getProjectDetails(id).subscribe((d)=>{
      console.log(d);
      this.project = d;

      this.getProjectTeams();
      
    })
  }

  getTeams(){
    this.api.getTeamsList().subscribe((d:any[])=>{
      this.allTeams = d;
    })
  }

  getProjectTeams(){
    const id = this.route.snapshot.params.id;
    this.api.getProjectTeams (id).subscribe((d:any[])=>{
      console.log(d);
      
      this.teams = d;
      
    })
  }

  


  deleteTeam(id){
    this.api.deleteTeamAffectation(id).subscribe(()=>{
      this.getProjectTeams();
    })
  }

  addTeam(){
    const id = this.route.snapshot.params.id;
    const payload = {
      id_team:this.affectTeam.value.id_team,
	    id_project:id
    }

    this.api.affectTeamToProject(payload).subscribe((data)=>{
      this.getProjectTeams();
    })
  }


  selectFile(event) {
    console.log(event);
    
    this.selectedFiles = event.target.files;

    this.fileUpload();
  }


  fileUpload(){
    this.progress = 0;

  this.currentFile = this.selectedFiles.item(0);
  this.upload(this.currentFile).subscribe(
    (event:any )=> {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        
      }

      
      
    },
    
    err => {
      this.progress = 0;
      this.message = 'Could not upload the file!';
      this.currentFile = undefined;
    });

  this.selectedFiles = undefined;
  }
  
  upload(file: File): Observable<HttpEvent<any>> {
    const id = this.route.snapshot.params.id;
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8080/api/auth/project/upload-file/'+id, formData, {
      reportProgress: true,
    });

    return this.http.request(req);
  }


  getFileName(str:any){
    let s = str.split('/');

    let last = s[s.length-1];

    return last;
    

  }
 
}
