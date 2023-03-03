import { Component, OnInit } from '@angular/core';
import { MenserveService } from 'src/app/services/menserve.service';

@Component({
  selector: 'app-menupdate',
  templateUrl: './menupdate.component.html',
  styleUrls: ['./menupdate.component.css']
})
export class MenupdateComponent implements OnInit {
  data :any
 constructor( private http:MenserveService){

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
