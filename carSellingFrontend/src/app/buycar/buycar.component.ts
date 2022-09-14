import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarDetailsServiceService } from '../Authentication/Services/car-details-service.service';
import {map, startWith} from 'rxjs/operators';
import { AuthserviceService } from '../Authentication/Services/authservice.service';
import Swal from 'sweetalert2';

export interface User {
  name: string;
}

@Component({
  selector: 'app-buycar',
  templateUrl: './buycar.component.html',
  styleUrls: ['./buycar.component.css']
})
export class BuycarComponent implements OnInit {

  Cars:any;
  imgbase='../../assets/images/';
  user:any;
  

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Maruti Suzuki'}, {name: 'Mahindra'}, {name: 'Toyota'}, {name: 'hyundai'}, {name: 'TATA'}];
  filteredOptions: Observable<User[]> | undefined;
  

  isLinear = false;

  constructor(private _formBuilder: FormBuilder, private carservice:CarDetailsServiceService,private authservice:AuthserviceService) { }

  ngOnInit(): void {
    //get all cars at starting
    this.getAll();
    this.user=this.authservice.getuserdetails();
    //filtered options
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

//get All cars api call to service
  public getAll()
  {
    this.carservice.getAllCars().subscribe(
      (data:any)=>
      {
      
        this.Cars=data;
        
        
      }
     )
  }



  
    displayFn(user: User): string {
      return user && user.name ? user.name : '';
    }
  
    private _filter(name: string): User[] {
      const filterValue = name.toLowerCase();
  
      return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }
//Open user ifo when user click on buy car
    opencarconfir()
    {

      Swal.fire({
        title: 'Do you want to book a test ride for the car',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Book Test Ride',
        denyButtonText: `See Other cars`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Our local dealers will contact you soon for the test ride\n You only need to be available\n Or you can also visit our nearest store', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('You can Check other car options also', '', 'info')
        }
      })
    }

}

