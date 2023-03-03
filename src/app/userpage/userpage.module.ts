import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserpageRoutingModule } from './userpage-routing.module';
import { UserpageComponent } from './userpage.component';
import { MencomponentComponent } from './mencomponent/mencomponent.component';
import { WomenComponent } from './women/women.component';
import { AccessoriesComponent } from './accessories/accessories.component';


@NgModule({
  declarations: [
    UserpageComponent,
    MencomponentComponent,
    WomenComponent,
    AccessoriesComponent
  ],
  imports: [
    CommonModule,
    UserpageRoutingModule
  ]
})
export class UserpageModule { }
