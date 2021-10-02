import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'price';

  cards = [
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
    },
    {
      title: "Plus",
      price: "$9",
      user: "5 Users",
      storage: "50GB",
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      freeSubdomain: true,
      monthlyReport: false
    },
    {
      title: "Pro",
      price: "$49",
      user: "Unlimited Users",
      storage: "150GB",
      publicProjects: true,
      communityAccess: true,
      privateProjects: true,
      phoneSupport: true,
      freeSubdomain: true,
      monthlyReport: true
    }
  ]
}
