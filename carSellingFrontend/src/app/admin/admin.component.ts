import { Component, OnInit } from '@angular/core';
import { AdminService } from './adminservice/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
Cars:any;
  constructor(private adminservice:AdminService) { }

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
onapprove(carid:any)
{
  console.log(carid);
  this.adminservice.approvecar(carid).subscribe(
    (data:any)=>
    {
      console.log(data);
      window.location.reload();
    }
  )
  window.location.reload();
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
