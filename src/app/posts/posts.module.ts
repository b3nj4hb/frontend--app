import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PagePostComponent } from './presentation/pages/page-post/page-post.component';
import { ListPostsComponent } from './presentation/views/list-posts/list-posts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PagePostComponent,
    ListPostsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
  ],exports:[PagePostComponent]
})
export class PostsModule { }
