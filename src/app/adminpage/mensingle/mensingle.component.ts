import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup  } from "@angular/forms";
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MenserveService } from 'src/app/services/menserve.service';
import { table } from '../table';

@Component({
  selector: 'app-mensingle',
  templateUrl: './mensingle.component.html',
  styleUrls: ['./mensingle.component.css']
})
export class MensingleComponent implements OnInit {
  updateform: any;

 constructor(private men:MenserveService , private route:ActivatedRoute , private http:Router ,private reac:FormBuilder ){}
 value:any;




//  classobj = new table();
 postform!:FormGroup 




  ngOnInit(): void {
    this.value=this.route.snapshot.params['id']
 this.updateform=this.reac.group({
  Name:[''],
  price:[''],
  description:[''],
  pics:[undefined]
 })
this.get()
  }

get(){
  this.men.getsingle(this.value).subscribe((data:any)=>{
    this.updateform.patchValue( {
      Name:data[0].Name,
      price: data[0].price,
      description:data[0].description,
      pics:data[0].pics
    });
  })
}

//   gettingdata(form:any){
//    console.log(form.value)
//  this.men.update(this.classobj.Name,this.classobj.price,this.classobj.pics,this.classobj.description,this.value).subscribe((data)=>{
//   console.log(data)
 
//  })

//   }

  image(pics:any){
    let image = pics.target.files[0];
    this.updateform.patchValue({
      pics : image
    })
  }

   update(){
    this.men.update(this.updateform.value.Name , this.updateform.value.price, this.updateform.value.description, this.updateform.value.pics,this.value).subscribe((data)=>{
      console.log(data)
      this.http.navigate(['/adminpage/menget'])
   })
  }
}
