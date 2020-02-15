import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  interests = Array(20).fill('');
  constructor() { }

  ngOnInit(): void {
  }

}
