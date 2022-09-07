import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  getAllCars()
  {
    return this.http.get(`http://localhost:8080/getall`);
  }

  //change isapproved on database
  approvecar(carid:any)
  {
    return this.http.put(`http://localhost:8080/admin/approvecar/${carid}`,true);
  }
  rejectcar(carid:any)
  {
    return this.http.delete(`http://localhost:8080/admin/rejectcar/${carid}`);
  }
  markassold(carid:any)
  {
    return this.http.put(`http://localhost:8080/admin/marksold/${carid}`,true);
  }
}
