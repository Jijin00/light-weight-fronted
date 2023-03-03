import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenserveService {

  constructor(private http:HttpClient) { }

  

  api="http://localhost:5678/men/"

  getMethod(){
    return this.http.get(this.api)
  }
getsingle(id:any){
  return this.http.get(this.api+id)
}

delete(id:any){
  return this.http.delete(this.api+id)
}
post(Name:any,price:any,description:any,pics:File,){
  let formvalue= new FormData()
  formvalue.append('Name',Name)
  formvalue.append('price',price)
  formvalue.append('description',description)
  formvalue.append('pics',pics)
  return this.http.post(this.api ,formvalue)
}
update(Name:any,price:any,description:any,pics:File,id:any){
   let formvalue= new FormData()
   formvalue.append('Name',Name)
   formvalue.append('price',price)
   formvalue.append('description',description)
   formvalue.append('pics',pics)
  return this.http.put(this.api+id , formvalue)
}

}
