import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-About',
  templateUrl: './AboutUs.component.html',
  styleUrls: ['./AboutUs.component.css']
})
export class AboutComponent implements OnInit {
 Fname:string='sai';
 Lname:string='charan';
 Age:number=20;
 salary:number=30000;
 
  constructor() { }

  ngOnInit(): void {
  }

}
