import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessserveService } from 'src/app/services/accessserve.service';

@Component({
  selector: 'app-accupsingle',
  templateUrl: './accupsingle.component.html',
  styleUrls: ['./accupsingle.component.css']
})
export class AccupsingleComponent {
  updateform: any;
  constructor(private acc:AccessserveService , private route:ActivatedRoute , private http:Router ,private reac:FormBuilder ){}
  value:any;

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
  this.acc.getsingle(this.value).subscribe((data:any)=>{
    this.updateform.patchValue( {
      Name:data[0].Name,
      price: data[0].price,
      description:data[0].description,
      pics:data[0].pics
    });
  })
}


  image(pics:any){
    let image = pics.target.files[0];
    this.updateform.patchValue({
      pics : image
    })
  }

   update(){
    this.acc.update(this.updateform.value.Name , this.updateform.value.price, this.updateform.value.description, this.updateform.value.pics,this.value).subscribe((data)=>{
      console.log(data)
      this.http.navigate(['/adminpage/accessget'])
   })
  }
}
