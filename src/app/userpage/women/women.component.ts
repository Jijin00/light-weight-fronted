import { Component } from '@angular/core';
import { WomenserveService } from 'src/app/services/womenserve.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent {
  datas:any[]=[]
  constructor(private http:WomenserveService){}

  ngOnInit(): void {
    this.getmenMethod()
   AOS.init()
   }
 
  getmenMethod(){
   this.http.getMethod().subscribe((data:any)=>{
     console.log(data)
     this.datas=data
   })
  }
 
}
