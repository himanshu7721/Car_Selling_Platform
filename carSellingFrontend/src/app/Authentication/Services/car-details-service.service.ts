import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsServiceService {
  id: any;

  constructor(private http:HttpClient,private authservice:AuthserviceService) { }
  public addcarDetails(carDetails:any)
  {
    this.id=localStorage.getItem('id');
    console.log(this.id);
    return this.http.post(`http://localhost:8080/savecar/${this.id}`,carDetails);
  }
  getAllCars()
  {
    return this.http.get(`http://localhost:8080/getall`);
  }
  public getcarstatus()
  {
    let user=this.authservice.getuserdetails();
    return this.http.get(`http://localhost:8080/getusercar/${user.id}`);
  }
}
