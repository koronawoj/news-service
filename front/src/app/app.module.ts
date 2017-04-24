import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routerModule } from './app.route';

import { AppComponent } from './app.component';
import { ShowNewsModule } from './show-news/show-news.module';
import { AddNewsModule } from './add-news/add-news.module';
import { DetailsModule } from './details/details.module';

import { NewsService } from './service/news.service';

import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ShowNewsModule,
    AddNewsModule,
    DetailsModule,
    routerModule,
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
