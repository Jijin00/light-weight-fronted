import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 constructor (private route : Router){

 }

  onsubmit(data:NgForm){
    if(data.value.username==="abc123" && data.value.username!=null){
          if(data.value.password==="abc123" && data.value.password!=null){
             this.route.navigate(['/adminpage'])
     }
  }else{
    alert("you are not welcome here")
   }
 }
}
