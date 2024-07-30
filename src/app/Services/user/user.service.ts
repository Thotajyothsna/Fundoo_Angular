import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice:HttpService) { }
  login(reqData:any){
    console.log(reqData)
    let header={
      headers:new HttpHeaders({
        'content-type':'application/json',
      })
    }
    return this.httpservice.postService('https://localhost:44348/api/User/Login',reqData,false,header)
  }
}
