import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../Authentication/login/login.component';
import { SignupComponent } from '../Authentication/signup/signup.component';
import { MatIcon } from '@angular/material/icon';
import { AuthserviceService } from '../Authentication/Services/authservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public dialog: MatDialog,public authservice:AuthserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  public openSignup(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '500px',
      height:'480px'
    });
}

public openlogin(): void{
  const logindialog=this.dialog.open(LoginComponent,{
    width:'500px',
    height:'300px',
  })
}

navigatetorole()
{
  let role=this.authservice.getuserrole();
  if(role=="admin")
  {
    this.router.navigate(['/admin/home']);
  }
  else if(role=="user")
  {
    this.router.navigate(['/user/home']);
    console.log("inside user");
  }
  else
  {
    this.logout();
  }
}

logout()
{
  this.authservice.logout();
  window.location.reload();
  //this.router.navigate(['']);
}
}
