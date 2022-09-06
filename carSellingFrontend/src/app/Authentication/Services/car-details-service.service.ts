import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsServiceService {
  id: any;

  constructor(private http:HttpClient) { }
  public addcarDetails(carDetails:any)
  {
    this.id=localStorage.getItem('id');
    return this.http.post(`http://localhost:8080/savecar/${this.id}`,carDetails);
  }
}
