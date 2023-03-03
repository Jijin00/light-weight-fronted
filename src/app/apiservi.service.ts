import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiserviService {

  constructor(private http:HttpClient) { }

  api="http://localhost:4321/"

  getMethod(){
    return this.http.get(this.api)
  }

  getSingle(id:any){
    return this.http.get(this.api +id)
  }
  delete(id:any){
    return this.http.delete(this.api+id)
  }
post(data:any){
  return this.http.post(this.api ,data)
}
update(data:any,id:any){
  return this.http.put(this.api+id , data)
}

}
