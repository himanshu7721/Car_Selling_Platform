import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsServiceService {

  constructor() { }
  public addcarDetails(carDetails:any)
  {
    console.log(carDetails);
    alert(carDetails);
  }
}
