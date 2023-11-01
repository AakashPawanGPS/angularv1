import { Component, Input } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user!: User;
  public router: Router;
  constructor(router: Router) {
    this.router = router;
  }
}
