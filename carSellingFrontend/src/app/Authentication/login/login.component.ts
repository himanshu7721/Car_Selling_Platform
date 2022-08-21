import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { AuthserviceService } from '../Services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password:''
  };

  email=new FormControl('',[Validators.required,Validators.email]);
  password=new FormControl('',[Validators.required]);

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private authservice:AuthserviceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  public onFormSubmit()
  {
    if(this.email.hasError('required')||this.password.hasError('required')||this.email.hasError('email'))
    {
      
    }
    else{
    this.authservice.userlogin(this.user).subscribe(
      (data:any)=>
      {
        if(data!=null)
        {
          Swal.fire('success',
            'Successfully Logged In',
            'success',
          );
          this.dialogRef.close();
        }
        else
        {
          this.snack.open('Invalid Details','',{
            duration:3000,
          });
        }
      }
    );
    
    }
  }

}
