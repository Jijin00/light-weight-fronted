import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// path error
import { MensingleComponent } from './mensingle/mensingle.component'; 

import { AccessdeleteComponent } from './accessdelete/accessdelete.component';
import { AccessgetComponent } from './accessget/accessget.component';
import { AccesspostComponent } from './accesspost/accesspost.component';
import { AccessupdateComponent } from './accessupdate/accessupdate.component';
import { AdminpageComponent } from './adminpage.component';
import { MendeleteComponent } from './mendelete/mendelete.component';
import { MengetComponent } from './menget/menget.component';
import { MenpostComponent } from './menpost/menpost.component';
import { MenupdateComponent } from './menupdate/menupdate.component';
import { WomendeleteComponent } from './womendelete/womendelete.component';
import { WomengetComponent } from './womenget/womenget.component';
import { WomenpostComponent } from './womenpost/womenpost.component';
import { WomenupdateComponent } from './womenupdate/womenupdate.component';
import { AccupsingleComponent } from './accupsingle/accupsingle.component';
import { WomenupsingleComponent } from './womenupsingle/womenupsingle.component';

const routes: Routes = [{ path: '', component: AdminpageComponent },
{path:'menpost',component:MenpostComponent},
{path:'menget',component:MengetComponent},
{path:'menupsingle/:id', component:MensingleComponent},
{path:'menupdate', component:MenupdateComponent},
{path:"mendelete",component:MendeleteComponent},
{path:'womenpost',component:WomenpostComponent},
{path:'womenget',component:WomengetComponent},
{path:'womenupdate',component:WomenupdateComponent},
{path:'womendelete',component:WomendeleteComponent},
{path:'accesspost',component:AccesspostComponent},
{path:'accessget',component:AccessgetComponent},
{path:'accessupdate',component:AccessupdateComponent},
{path:'accessdelete',component:AccessdeleteComponent},
{path:'accessupsingle/:id',component:AccupsingleComponent},
{path:'womenupsingle/:id',component:WomenupsingleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpageRoutingModule { }
