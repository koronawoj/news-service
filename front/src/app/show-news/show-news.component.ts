import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { News } from '../model/news';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {

  news: News[];

  constructor(private newsService: NewsService) {
    this.newsService.getNews()
    .subscribe(news => {
      this.news = news;
    })
  }

  ngOnInit() {
  }

}
