import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  notificationsList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/list',

      httpOptions

    )
  }

  updateNotifications() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/update',

      httpOptions

    )
  }







  getEmployeesList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/list',

      httpOptions

    )
  }

  getClientsList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/clients/list',

      httpOptions

    )
  }




  getTeamsList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams/list',

      httpOptions

    )
  }



  deleteEmployee(id) {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/delete/' + id,

      httpOptions

    )
  }

  deleteTeam(id) {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams/delete/' + id,

      httpOptions

    )
  }

  getTeam(id) {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams/list/' + id,

      httpOptions

    )
  }


  addTeam(data) {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/teams/add', data,

      httpOptions

    )
  }

  updateTeam(id, data) {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/teams/update/' + id, data,

      httpOptions

    )
  }


  affectEmpoyeeToTeam(id_user, id_team) {


    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams/affect/' + id_user + '/' + id_team,

      httpOptions

    )
  }


  

  getAffectedEmployeeToTeam(id) {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams/list-team-employees/'+id,

      httpOptions

    )
  }

  deleteEmployeeAfectation(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams/delete-employee-affect/'+id,

      httpOptions

    )
  }


  addNewClient(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/clients/add',data,

      httpOptions

    )
  }

  addNewProject(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/projects/add',data,

      httpOptions

    )
  }

  getProjectsList() {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/projects/list',
      httpOptions
    )
  }

  getProjectDetails(id) {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/projects/list/'+id,
      httpOptions
    )
  }
  getProjectTeams(id){
    

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams-project/list/'+id,
      httpOptions
    )
  }

  deleteTeamAffectation(id){
    

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams-project/delete/'+id,
      httpOptions
    )
  }


  affectTeamToProject(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/teams-project/add',data,

      httpOptions

    )
  }


}
