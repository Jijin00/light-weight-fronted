import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccsingleComponent } from '../accsingle/accsingle.component';
import { MensingleComponent } from '../mensingle/mensingle.component';
import { WomensingleComponent } from '../womensingle/womensingle.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { MencomponentComponent } from './mencomponent/mencomponent.component';
import { UserpageComponent } from './userpage.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [{ path: '', component: UserpageComponent },
{path:"men",component:MencomponentComponent},
{path:"women", component:WomenComponent},
{path:'accessories',component:AccessoriesComponent},
{path:"mensingle/:id",component:MensingleComponent},
{path:"womensingle/:id",component:WomensingleComponent},
{path:"accsingle/:id",component:AccsingleComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpageRoutingModule { }
