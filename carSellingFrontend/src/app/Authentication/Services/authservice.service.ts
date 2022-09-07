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
  public getcurrentuser()
  {
    return this.http.get('http://localhost:8080/current-user');
  }

  //save token to localstorage
  public settoken(token:any)
  {
    localStorage.setItem("token",token);
    return true;
  }
    //get the token
    public gettoken()
    {
      return localStorage.getItem("token");
    }

  //check user is logged in or not
  public isloggedin()
  {
    let token=localStorage.getItem("token");
    if(token==undefined||token==null||token=='')
    {
    return false;
    }
    else
    {
    return true;
    }
  }
  
  //logout the user:: Remove token from localStorage
  public logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("id");
    localStorage.removeItem("carid");
  }



  //save user details to localstorage
  public setuserdetail(User:any)
  {
    localStorage.setItem("user",JSON.stringify(User));
  }
  //get the current user details
  public getuserdetails()
  {
    let user=localStorage.getItem("user");
    if(user!=null)
    {
    return JSON.parse(user);
    }
    else
    {
    this.logout();
    return null;
    }
  }

  //get current user role
  public getuserrole()
  {
    let user=this.getuserdetails();
    return  user.authorities[0].authority;

  }
}
