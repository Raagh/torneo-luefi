import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../shared/services/news/news.service';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.scss'],
})
export class HomeNewsComponent implements OnInit {
  public news: News[];

  constructor(newsService: NewsService) {
    newsService.getNews().subscribe(data => (this.news = data));
  }

  ngOnInit() {}
}
