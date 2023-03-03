import { Component } from '@angular/core';
import { WomenserveService } from 'src/app/services/womenserve.service';

@Component({
  selector: 'app-womenupdate',
  templateUrl: './womenupdate.component.html',
  styleUrls: ['./womenupdate.component.css']
})
export class WomenupdateComponent {
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
