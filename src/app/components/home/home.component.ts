import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 Fname:string='sai';
 Lname:string='charan';
 Age:number=20;
 salary:number=30000;
 
  constructor() { }

  ngOnInit(): void {
  }

}
