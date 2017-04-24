import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './add-news.component';
import { FormsModule } from '@angular/forms';

import { routerModule } from './add-news.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routerModule
  ],
  declarations: [
    AddNewsComponent
  ],
  exports:[
    AddNewsComponent
  ]
})
export class AddNewsModule { }
