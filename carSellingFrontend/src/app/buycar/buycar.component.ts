import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CarDetailsServiceService } from '../Authentication/Services/car-details-service.service';
import {map, startWith} from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-buycar',
  templateUrl: './buycar.component.html',
  styleUrls: ['./buycar.component.css']
})
export class BuycarComponent implements OnInit {

  myControl = new FormControl<string | User>('');
  options: User[] = [{name: 'Maruti Suzuki'}, {name: 'Mahindra'}, {name: 'Toyota'}, {name: 'hyundai'}, {name: 'TATA'}];
  filteredOptions: Observable<User[]> | undefined;
  

  isLinear = false;

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

}

