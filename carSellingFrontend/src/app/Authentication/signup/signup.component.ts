import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthserviceService } from '../Services/authservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public user={
    fname:'',
    lname:'',
    address:'',
    phone_number:'',
    emailId:'',
    password:'',
    username:''
  };

  fname=new FormControl('',[Validators.required]);
  lname=new FormControl('',[Validators.required]);
  address=new FormControl('',[Validators.required]);
  phone_number=new FormControl('',[Validators.required, Validators.pattern('[0-9]{10,10}')]);
  email_id=new FormControl('',[Validators.required, Validators.email]);
  username=new FormControl('',[Validators.required]);
  password=new FormControl('',[Validators.required]);
  rpassword=new FormControl('',[Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<SignupComponent>,private snack:MatSnackBar, private authservice:AuthserviceService,private router:Router
  ) {}

  

  ngOnInit(): void {
  }

  onformsubmit()
  {
    if(this.fname.hasError('required')||this.lname.hasError('required')||this.address.hasError('required')||this.phone_number.hasError('required')||this.phone_number.hasError('pattern')||this.email_id.hasError('required')||this.email_id.hasError('email')||this.password.hasError('required'))
    {
      this.snack.open('Invalid Details, Please Enter Valid Details','',{
        duration:3000,
      });
    }
    else if(this.password.value!=this.rpassword.value)
    {
      console.log(this.password.value);
      console.log(this.rpassword.value);
      this.snack.open('Password doesn\'t match\n Please enter the same passsword','',{
        duration:3000,
      });
      console.log("passwor doesn't match");
    }
    else
    {
      this.authservice.addNewUser(this.user).subscribe(
        (data)=>
        {
          console.log(data);
          Swal.fire('success',
            'Successfully Registered',
            'success',
          );
          this.dialogRef.close();
        },
        (error)=>
        {
          this.snack.open('Database Error!!!','',{
            duration:3000,
          });
        }
      );
      
    }
  }

}
