import { Component } from '@angular/core';
import { AccessserveService } from 'src/app/services/accessserve.service';

@Component({
  selector: 'app-accessupdate',
  templateUrl: './accessupdate.component.html',
  styleUrls: ['./accessupdate.component.css']
})
export class AccessupdateComponent {
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
