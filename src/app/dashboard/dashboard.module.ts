import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EmployeesManagemenetComponent } from './employees-managemenet/employees-managemenet.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { DashComponent } from './dash/dash.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsAddComponent } from './teams-add/teams-add.component';
import { TeamsEditComponent } from './teams-edit/teams-edit.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsAddComponent } from './clients-add/clients-add.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsAddComponent } from './projects-add/projects-add.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartsModule } from 'ng2-charts';
import { ChartoneComponent } from './chartone/chartone.component';
import { CharttwoComponent } from './charttwo/charttwo.component';

@NgModule({
  declarations: [DashboardComponent, HomeComponent,  EmployeesManagemenetComponent, EmployeeAddComponent, DashComponent, EmployeeEditComponent, TeamsComponent, TeamsAddComponent, TeamsEditComponent, ClientsComponent, ClientsAddComponent, ProjectsComponent, ProjectsAddComponent, ProjectDetailsComponent, ChartoneComponent, CharttwoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule,Ng2SmartTableModule,ChartsModule
  ]
})
export class DashboardModule { }
