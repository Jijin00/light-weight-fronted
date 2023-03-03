import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from "@angular/forms";
import { Router } from '@angular/router';
import { MenserveService } from 'src/app/services/menserve.service';
@Component({
  selector: 'app-menpost',
  templateUrl: './menpost.component.html',
  styleUrls: ['./menpost.component.css']
})
export class MenpostComponent implements OnInit {

postform!:FormGroup 

constructor(private reac:FormBuilder , private wwe:MenserveService ,private tyu:Router ){}


  ngOnInit(): void {
 this.postform=this.reac.group({
  Name:[''],
  price:[''],
  description:[''],
  pics:['']
 })
  }

image(pics:any){
  let image = pics.target.files[0];
  this.postform.patchValue({
    pics : image
  })
}

post(){
   this.wwe.post(this.postform.value.Name , this.postform.value.price, this.postform.value.description, this.postform.value.pics).subscribe((data)=>{
    console.log(data)
    this.tyu.navigate(['/adminpage/menget'])
   })
}

}
