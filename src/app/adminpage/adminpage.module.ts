import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminpageRoutingModule } from './adminpage-routing.module';
import { AdminpageComponent } from './adminpage.component';
import { MenpostComponent } from './menpost/menpost.component';
import { MengetComponent } from './menget/menget.component';
import { MenupdateComponent } from './menupdate/menupdate.component';
import { MendeleteComponent } from './mendelete/mendelete.component';
import { WomenpostComponent } from './womenpost/womenpost.component';
import { WomengetComponent } from './womenget/womenget.component';
import { WomenupdateComponent } from './womenupdate/womenupdate.component';
import { WomendeleteComponent } from './womendelete/womendelete.component';
import { AccesspostComponent } from './accesspost/accesspost.component';
import { AccessgetComponent } from './accessget/accessget.component';
import { AccessupdateComponent } from './accessupdate/accessupdate.component';
import { AccessdeleteComponent } from './accessdelete/accessdelete.component';
import { MensingleComponent } from './mensingle/mensingle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccupsingleComponent } from './accupsingle/accupsingle.component';
import { WomenupsingleComponent } from './womenupsingle/womenupsingle.component';


@NgModule({
  declarations: [
    AdminpageComponent,
    MenpostComponent,
    MengetComponent,
    MenupdateComponent,
    MendeleteComponent,
    WomenpostComponent,
    WomengetComponent,
    WomenupdateComponent,
    WomendeleteComponent,
    AccesspostComponent,
    AccessgetComponent,
    AccessupdateComponent,
    AccessdeleteComponent,
    MensingleComponent,
    AccupsingleComponent,
    WomenupsingleComponent
  ],
  imports: [
    CommonModule,
    AdminpageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminpageModule { }
