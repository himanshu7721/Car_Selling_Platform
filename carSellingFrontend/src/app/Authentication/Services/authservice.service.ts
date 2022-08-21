import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }

  public addNewUser(user:any)
  {
    return this.http.post('http://localhost:8080/signup',user);
  }
  public userlogin(loginData:any)
  {
    return this.http.post('http://localhost:8080/login',loginData);
  }
}
