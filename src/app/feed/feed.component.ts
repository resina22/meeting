import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  imgs = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/44_-_Iguazu_-_D%C3%A9cembre_2007.jpg/1920px-44_-_Iguazu_-_D%C3%A9cembre_2007.jpg',
    'https://www.clickriomafra.com.br/umbanda/wp-content/uploads/2011/07/natureza1.jpg',
    'https://www.relaxar.org/wp-content/uploads/2019/03/relaxar-natureza.jpg',
    'https://www.clickriomafra.com.br/umbanda/wp-content/uploads/2011/07/natureza1.jpg',
  ];

  constructor() {}

  ngOnInit() {}

}
