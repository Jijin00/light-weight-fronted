import { Component } from '@angular/core';
import { AccessserveService } from 'src/app/services/accessserve.service';

@Component({
  selector: 'app-accessget',
  templateUrl: './accessget.component.html',
  styleUrls: ['./accessget.component.css']
})
export class AccessgetComponent {
  data :any
  constructor( private http:AccessserveService){

  }
   ngOnInit(): void {
    this.getmethod()
   }
 
   getmethod(){
     this.http.getMethod().subscribe((data)=>{
       console.log(data)
       this.data=data
     })
   }
}
