import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { ActivatedRoute } from '@angular/router';
import { News } from '../model/news';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


                news = {}

  constructor(private newsService:NewsService,
              private activatedRoute:ActivatedRoute) {

              }


  ngOnInit() {
    console.log(this.news);

    this.cos();
  }

  cos(){
    let id = this.activatedRoute.snapshot.params['id'];
    this.newsService.getNew(id)
    .subscribe(news => {
      this.news = news;
      console.log(news.title);
    })
  }


}
