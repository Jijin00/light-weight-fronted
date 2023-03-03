import { Component, OnInit } from '@angular/core';
import { MenserveService } from '../services/menserve.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-mensingle',
  templateUrl: './mensingle.component.html',
  styleUrls: ['./mensingle.component.css']
})
export class MensingleComponent implements OnInit{

  id:any
  pic:any[]=[]
  images:any[]=[]
 constructor(private http:MenserveService,private spy:ActivatedRoute){}


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
