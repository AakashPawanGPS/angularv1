import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  searchHistory: any = {};
  ngOnInit(): void {
    if (localStorage.getItem('queryCache')) {
      this.searchHistory = JSON.parse(localStorage.getItem('queryCache')!);
    }
  }
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  hasHistory(): boolean {
    return Object.keys(this.searchHistory).length > 0;
  }
  clearSearchHistory(): any {
    this.searchHistory = {};
    localStorage.removeItem("queryCache");
  }
}
