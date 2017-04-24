import { Component, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { Comment } from '../model/comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-comment',
  template: `
  <form class="well" (submit)="addComment($event)">
    <div class="form-group">
      <textarea class="form-control" rows="3" [(ngModel)]="comment"  name="comment"placeholder="Comment"></textarea>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" [(ngModel)]="author"  name="author"placeholder="Author">
    </div>
  <button type="submit"(click)="addComment($event)" class="btn btn-primary">Submit</button>
  </form>
  `
})
export class AddCommentComponent implements OnInit {


  commentModel = [];
  newsId: string;
  comment: string;
  author: string;
  data: string;

  constructor(private newsService:NewsService,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  addComment(event){
    event.preventDefault();
    let displayDate = new Date().toLocaleTimeString();
    let id = this.activatedRoute.snapshot.params['id'];
    let newComment = {
    newsId: id,
    comment: this.comment,
    author: this.author,
    data: displayDate
    }
    this.newsService.addComment(newComment)
    .subscribe(one => {
      this.commentModel.push(one);
    })

  }


}
//
// public String id;
//
// 	public String NewsId;
//
// 	public String comment;
//
// 	public String author;
// 	public String data;
