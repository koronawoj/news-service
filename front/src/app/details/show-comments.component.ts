import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Comment } from '../model/comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-comments',
  template:`
  <div *ngFor="let comment of comments">
  <div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{{comment.comment}}</li>
    <li class="list-group-item">{{comment.author}} - {{comment.data}}</li>
  </ul>
  </div>
  <br>
</div>
  `
})
export class ShowCommentsComponent implements OnInit {

  comments = [];

  constructor(private newsService: NewsService,
              private activatedRoute:ActivatedRoute) {
    let newsId = this.activatedRoute.snapshot.params['id'];
    this.newsService.getComments(newsId)
    .subscribe(comments => {
      this.comments = comments;
    })
  }

  ngOnInit() {
  }

}
