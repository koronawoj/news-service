import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NewsService {

  constructor(private http:Http) { }

  getNews(){
    return this.http.get('http://localhost:8080/api/news/getNews')
      .map(res => res.json());
  }

  getComments(newsId){
    return this.http.get('http://localhost:8080/api/news/getComments/' + newsId)
      .map(res => res.json());
  }

  getNew(id){

    return this.http.get('http://localhost:8080/api/news/getNews/' + id)
      .map(res => res.json());
  }

  addNews(newNews){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/news/saveNews', JSON.stringify(newNews), {headers: headers})
      .map(res => res.json());
  }

  addComment(newComment){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:8080/api/news/saveComment', JSON.stringify(newComment), {headers: headers})
      .map(res => res.json());
  }
}
