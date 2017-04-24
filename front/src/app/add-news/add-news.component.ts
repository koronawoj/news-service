import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { News } from '../model/news';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  news = [];
  title: string;
  text: string;
  author: string;
  data: string;


  constructor(private newsService:NewsService) { }

  ngOnInit() {
  }

  addNews(event){
    event.preventDefault();
    let displayDate = new Date().toLocaleTimeString();
    let newNews = {
      title: this.title,
      text: this.text,
      author: this.author,
      data: displayDate
    }

    this.newsService.addNews(newNews)
    .subscribe(one => {
      this.news.push(one);
    })
  }

}
