import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WomenserveService } from '../services/womenserve.service';

@Component({
  selector: 'app-womensingle',
  templateUrl: './womensingle.component.html',
  styleUrls: ['./womensingle.component.css']
})
export class WomensingleComponent implements  OnInit {

  id:any
  pic:any[]=[]
  images:any[]=[]
  constructor(private http:WomenserveService,private spy:ActivatedRoute){}

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
