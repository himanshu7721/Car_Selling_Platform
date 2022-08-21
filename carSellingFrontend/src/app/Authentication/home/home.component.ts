import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CarDetailsServiceService } from '../Services/car-details-service.service';

export interface User {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //formControl for car details form
  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Maruti Suzuki'}, {name: 'Mahindra'}, {name: 'Toyota'}, {name: 'hyundai'}, {name: 'TATA'}];
  filteredOptions: Observable<User[]> | undefined;

  brandFormGroup = this._formBuilder.group({
    brandCtrl: ['', Validators.required],
  });
  modelFormGroup = this._formBuilder.group({
    modelCtrl: ['', Validators.required],
  });
  yearFormGroup = this._formBuilder.group({
    yearCtrl: ['', Validators.required],
  });
  ownerFormGroup = this._formBuilder.group({
    ownerCtrl: ['', Validators.required],
  });
  kmFormGroup = this._formBuilder.group({
    kmCtrl: ['', Validators.required],
  });
  mobileFormGroup = this._formBuilder.group({
    mobileCtrl: ['', Validators.required],
  });
  

  isLinear = false;



  //Data Binding for Car Details form
  carDetails={
    brand:'',
    carModel:'',
    year:'',
    owner:'',
    kms:'',
    mobilenumber:''
  }

  constructor(private _formBuilder: FormBuilder, private carservice:CarDetailsServiceService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }
  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


  
  //Car Details Form Submit Event

  carDetailsSubmit()
  {
    this.carservice.addcarDetails(this.carDetails);
  }




}
