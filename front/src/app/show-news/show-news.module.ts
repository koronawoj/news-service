import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowNewsComponent } from './show-news.component';

import { routerModule } from './show-news.routing';

@NgModule({
  imports: [
    CommonModule,
    routerModule
  ],
  declarations: [
    ShowNewsComponent
  ],
  exports:[
    ShowNewsComponent
  ]
})
export class ShowNewsModule { }
