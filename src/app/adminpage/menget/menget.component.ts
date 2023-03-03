import { Component } from '@angular/core';
import { MenserveService } from 'src/app/services/menserve.service';

@Component({
  selector: 'app-menget',
  templateUrl: './menget.component.html',
  styleUrls: ['./menget.component.css']
})
export class MengetComponent {
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
