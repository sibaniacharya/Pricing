import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  @Input() myData = 
  {
    title: "Free",
    price: "$0",
    user: "Single User",
    storage: "5GB",
    publicProjects: true,
    communityAccess: true,
    privateProjects: false,
    phoneSupport: false,
    freeSubdomain: false,
    monthlyReport: false
  
};
    
  constructor() { }

  ngOnInit(): void {
  }

}
