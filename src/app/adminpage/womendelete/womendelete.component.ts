import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WomenserveService } from 'src/app/services/womenserve.service';

@Component({
  selector: 'app-womendelete',
  templateUrl: './womendelete.component.html',
  styleUrls: ['./womendelete.component.css']
})
export class WomendeleteComponent {
  data :any
  constructor(private http:WomenserveService ,private rko:Router){}
 
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
  this.rko.navigate(['/adminpage/womenget'])
 })
 }
}
