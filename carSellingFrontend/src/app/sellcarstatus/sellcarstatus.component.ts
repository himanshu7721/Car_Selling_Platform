import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CarDetailsServiceService } from '../Authentication/Services/car-details-service.service';

@Component({
  selector: 'app-sellcarstatus',
  templateUrl: './sellcarstatus.component.html',
  styleUrls: ['./sellcarstatus.component.css']
})
export class SellcarstatusComponent implements OnInit {
car:any;
  constructor(private carservice:CarDetailsServiceService,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.getusercarstatus();
  }
  getusercarstatus() {
    this.carservice.getcarstatus().subscribe(
      (data:any)=>
      {
        this.car=data;
      },
      (error)=>
      {
        this.snack.open('Database Error!!!','',{
            duration:3000,
          });
      }
    )
  }

}
