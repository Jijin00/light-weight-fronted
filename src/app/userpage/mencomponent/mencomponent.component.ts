import { Component , OnInit } from '@angular/core';
import { MenserveService } from 'src/app/services/menserve.service';
import * as AOS from 'aos';
@Component({
  selector: 'app-mencomponent',
  templateUrl: './mencomponent.component.html',
  styleUrls: ['./mencomponent.component.css']
})
export class MencomponentComponent implements  OnInit {
 datas:any[]=[]
  constructor(private http:MenserveService){}

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
