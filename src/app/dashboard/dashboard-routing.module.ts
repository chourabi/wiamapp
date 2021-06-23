import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ClientsComponent } from './clients/clients.component';

import { DashComponent } from './dash/dash.component';

import { DashboardComponent } from './dashboard.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsAddComponent } from './projects-add/projects-add.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamsAddComponent } from './teams-add/teams-add.component';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';
import { TeamsComponent } from './teams/teams.component';



const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'home', component:HomeComponent , children:[
    { path:"", component:DashComponent },
    { path:"dash", component:DashComponent },

    { path:'admin-employees', component:EmployeesManagemenetComponent },
    { path:'admin-employees-add', component:EmployeeAddComponent },
    { path:'admin-employees-edit/:id', component:EmployeeEditComponent },
    
    { path:'admin-teams', component:TeamsComponent },
    { path:'admin-teams-add', component:TeamsAddComponent },
    { path:'admin-team-edit/:id', component:TeamsEditComponent },


    { path:'clients', component:ClientsComponent },
    { path:'clients-add', component:ClientsAddComponent },

    { path:'projects', component:ProjectsComponent },
    { path:'projects-add', component:ProjectsAddComponent },
    { path:'project/:id', component:ProjectDetailsComponent }
    
    

    
    

    
    
  ] },

  { path: 'error-page', component: ErrorPageComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
