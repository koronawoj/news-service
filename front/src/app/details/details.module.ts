import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { routerModule } from './details.routing';
import { AddCommentComponent } from './add-comment.component';
import { FormsModule } from '@angular/forms';
import { ShowCommentsComponent } from './show-comments.component';

@NgModule({
  imports: [
    CommonModule,
    routerModule,
    FormsModule
  ],
  declarations: [
    DetailsComponent,
    AddCommentComponent,
    ShowCommentsComponent
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
