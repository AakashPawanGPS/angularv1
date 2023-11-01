import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';
  queryCache: any = {};
  users: any[] = [];
  constructor(private httpService: HttpService) { }
  searchUsers(query: string) {
    const queryCache = JSON.parse(localStorage.getItem('queryCache') || '{}') as { [key: string]: any };

    if (queryCache[query]) {
      this.users = queryCache[query];
      this.searchQuery = '';
      return;
    }

    this.httpService.searchUsers(query).subscribe((data) => {
      this.users = data.items;
      queryCache[query] = this.users;
      localStorage.setItem('queryCache', JSON.stringify(queryCache));
    });

    this.searchQuery = '';
  }

}
