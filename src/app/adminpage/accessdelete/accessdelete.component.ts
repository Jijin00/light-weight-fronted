import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessserveService } from 'src/app/services/accessserve.service';


@Component({
  selector: 'app-accessdelete',
  templateUrl: './accessdelete.component.html',
  styleUrls: ['./accessdelete.component.css']
})
export class AccessdeleteComponent {
  data :any
  constructor(private http:AccessserveService,private rko:Router){}

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
   this.rko.navigate(['/adminpage/accessget'])
  })
  }
}
