import { Component, OnInit } from '@angular/core';
import { CarDetailsServiceService } from '../Authentication/Services/car-details-service.service';
import {FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sellcar',
  templateUrl: './sellcar.component.html',
  styleUrls: ['./sellcar.component.css']
})


export class SellcarComponent implements OnInit {

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

  carDetails={
    brand:'',
    carModel:'',
    year:'',
    owner:'',
    kms:'',
    mobilenumber:''
  }
  constructor(private _formBuilder: FormBuilder, private carservice:CarDetailsServiceService, private snackbar:MatSnackBar) { }
  ngOnInit(): void {
  }
  carDetailsSubmit()
  {
    Swal.fire({
        title:'Do you want to book an appointment for the car',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Book An Appointment',
        denyButtonText: `Don't Book The Appointment`,
      }).then((result)=>
      {
        if(result.isConfirmed)
        { 
          this.carservice.addcarDetails(this.carDetails).subscribe(
            (data:any)=>
          {
            //localStorage.setItem("carid",data.id);
            //console.log(localStorage.getItem("carid"));
            Swal.fire('Car Details Submitted Successfully\n Our Car Inspector will contact you soon!!!','','success');

          },
          (error)=>
          {
            this.snackbar.open('Database Error!!!','',{
              duration:3000,
            });
          });
          
        }
        else if(result.isDenied)
        {
          Swal.fire('Car Details Not submitted!!!!','','info');
        }
      });

     
  }

  

}
