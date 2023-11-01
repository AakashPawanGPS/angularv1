import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showHomeComponent: boolean = false;
  showHistoryComponent: boolean = false;
  public router: Router;
  constructor(router: Router) {
    this.router = router;
  }
  toggleComponents(): void {
    if (this.router.url.includes('home')) {
      this.showHomeComponent = true;
      this.showHistoryComponent = false;
    }
    else {
      this.showHomeComponent = false;
      this.showHistoryComponent = true;
    }
  }
}
