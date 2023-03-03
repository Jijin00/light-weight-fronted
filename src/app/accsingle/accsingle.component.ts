import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessserveService } from '../services/accessserve.service';

@Component({
  selector: 'app-accsingle',
  templateUrl: './accsingle.component.html',
  styleUrls: ['./accsingle.component.css']
})
export class AccsingleComponent implements  OnInit{
  id:any
  pic:any[]=[]
  images:any[]=[]
  constructor(private http:AccessserveService,private spy:ActivatedRoute){}

  ngOnInit() {
    this.id= this.spy.snapshot.params['id']
    this.getsingle()
    this.getmethod()

  }

  getsingle(){
    this.http.getsingle(this.id).subscribe((data:any)=>{
      console.log(data)
      console.log(this.id)
      this.pic=data
    })
   }
  
   getmethod(){
    this.http.getMethod().subscribe((data:any)=>{
     this.images=data
    })
   }

}
