import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenserveService } from 'src/app/services/menserve.service';

@Component({
  selector: 'app-mendelete',
  templateUrl: './mendelete.component.html',
  styleUrls: ['./mendelete.component.css']
})
export class MendeleteComponent {
  data :any
 constructor(private http:MenserveService ,private rko:Router){}

 ngOnInit(): void {
  this.getmethod()
 }

 getmethod(){
  this.http.getMethod().subscribe((data)=>{
    console.log(data)
    this.data=data
  })
}
delete(id:any){
this.http.delete(id).subscribe((data)=>{
  console.log(data)
 this.getmethod()
 this.rko.navigate(['/adminpage/menget'])
})
}
}
