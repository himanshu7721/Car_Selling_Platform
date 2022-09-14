import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from './adminservice/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //imgbase='../../assets/images/';
Cars:any;
  constructor(private adminservice:AdminService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getAll();
  }
public getAll()
{
  this.adminservice.getAllCars().subscribe(
    (data:any)=>
    {
    
      this.Cars=data;
      
      
    }
   )
}
onapprove(carid:any,price:any)
{
  console.log(carid);
  if(price!=null&&price!=''&&price!=0)
  {
  this.adminservice.approvecar(carid,price).subscribe(
    (data:any)=>
    {
      console.log(data);
      window.location.reload();
    }
  )
  window.location.reload();
  }
  else
  {
    this.snack.open('!!Price can\'t be empty!!','',{
      duration:3000,
    }); 
  }
}
onreject(carid:any)
{
  this.adminservice.rejectcar(carid).subscribe(
    (data:any)=>
    {
      window.location.reload();
    }
    
  )
  window.location.reload();
}
markAsSold(carid:any)
{
  this.adminservice.markassold(carid).subscribe(
    (data:any)=>
    {
      window.location.reload();
    }
  )
  window.location.reload();
}
}
