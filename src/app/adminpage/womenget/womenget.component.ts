import { Component } from '@angular/core';
import { WomenserveService } from 'src/app/services/womenserve.service';

@Component({
  selector: 'app-womenget',
  templateUrl: './womenget.component.html',
  styleUrls: ['./womenget.component.css']
})
export class WomengetComponent {
  data :any
  constructor( private http:WomenserveService){
 
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
