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
    username:'',
    password:''
  };

  username=new FormControl('',[Validators.required]);
  password=new FormControl('',[Validators.required]);

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private authservice:AuthserviceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  public onFormSubmit()
  {
    if(this.username.hasError('required')||this.password.hasError('required'))
    {
      this.snack.open('Please enter the data in correct format','',{
        duration:3000,
      });
    }
    else{
    this.authservice.userlogin(this.user).subscribe(
      (data:any)=>
      {
        //localStorage.setItem('id',data.id);
        //console.log(localStorage.getItem('id'));
        console.log(data);
        this.authservice.settoken(data.token);
        this.authservice.getcurrentuser().subscribe(
          (currentuser)=>
          {
            this.authservice.setuserdetail(currentuser);
            console.log(currentuser);

            //redirect: admin: admin dashboard
            if(this.authservice.getuserrole()=="Admin")
            {

            }
            //redirect:user: user dashboard
            else if(this.authservice.getuserrole()=="User")
            {

            }
            else
            {
              this.authservice.logout();
              window.location.href='';
            }
          }
        )
          Swal.fire('success',
            'Successfully Logged In',
            'success',
          );
          this.dialogRef.close();
        
       
      },
      (error)=>
      {
        this.snack.open('Invalid Details','',{
          duration:3000,
        }); 
      }
    );
    
    }
  }

}
