import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private dialogRef: MatDialogRef<LoginComponent>, private authservice:AuthserviceService,private snack:MatSnackBar,private router:Router) { }

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
        console.log(data);
        this.authservice.settoken(data.token);
        console.log(localStorage.getItem("token"));
        this.authservice.getcurrentuser().subscribe(
          (currentuser:any)=>
          {
            this.authservice.setuserdetail(currentuser);
            localStorage.setItem('id',currentuser.id);
            console.log(currentuser);

            //redirect: admin: admin dashboard
            if(this.authservice.getuserrole()=="admin")
            {
              this.router.navigate(['/admin/home'])
            }
            //redirect:user: user dashboard
            else if(this.authservice.getuserrole()=="user")
            {
              this.router.navigate(['/user/home']);
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
        this.snack.open('Database Error or Invalid Details','',{
          duration:3000,
        }); 
      }
    );
    
    }
  }

}
