import { Component, OnInit } from '@angular/core';
import { ApiserviService } from '../apiservi.service';
import { AccessserveService } from '../services/accessserve.service';
import { MenserveService } from '../services/menserve.service';
import { WomenserveService } from '../services/womenserve.service';

import * as AOS from 'aos';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit{

  datas:any[]=[]
  values:any[]=[]
  items:any[]=[]
 constructor(private men:MenserveService , private women:WomenserveService , private access:AccessserveService){

 }
  ngOnInit(): void {
   this.getmenMethod()
   this.getaccMethod()
   this.getwomenMethod()

   AOS.init()
  }

 getmenMethod(){
  this.men.getMethod().subscribe((data:any)=>{
    console.log(data)
    this.datas=data
  })
 }

 getwomenMethod(){
  this.women.getMethod().subscribe((data:any)=>{
    console.log(data)
    this.values=data
  })
 }

 getaccMethod(){
  this.access.getMethod().subscribe((data:any)=>{
    console.log(data)
    this.items=data
  })
 }
}
