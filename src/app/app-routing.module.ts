import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./userpage/userpage.module').then(m => m.UserpageModule) },
 { path: 'adminpage', loadChildren: () => import('./adminpage/adminpage.module').then(m => m.AdminpageModule) },
{path:"login" , component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
