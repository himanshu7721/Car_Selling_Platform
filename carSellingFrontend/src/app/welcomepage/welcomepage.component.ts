import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../Authentication/login/login.component';
import { SignupComponent } from '../Authentication/signup/signup.component';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit {

  
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  public loginform():void
  {
    const logindialog=this.dialog.open(LoginComponent,{
      width:'500px',
      height:'300px',
    });
  }
  signupform():void
  {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px',
      height:'480px'
    });
  }

}
