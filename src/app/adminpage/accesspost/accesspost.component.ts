import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccessserveService } from 'src/app/services/accessserve.service';

@Component({
  selector: 'app-accesspost',
  templateUrl: './accesspost.component.html',
  styleUrls: ['./accesspost.component.css']
})
export class AccesspostComponent {
  postform!:FormGroup 
  constructor(private reac:FormBuilder , private wwe:AccessserveService ,private tyu:Router ){}
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
       this.tyu.navigate(['/adminpage/accessget'])
      })
   }
   
}
