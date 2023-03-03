import { Component , OnInit } from '@angular/core';
import { AccessserveService } from 'src/app/services/accessserve.service';
import * as Aos from 'aos';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit{
  datas:any[]=[]
  constructor(private http:AccessserveService){}

  ngOnInit(): void {
    this.getmenMethod()
   Aos.init()
   }
 
  getmenMethod(){
   this.http.getMethod().subscribe((data:any)=>{
     console.log(data)
     this.datas=data
   })
  }
 
}
