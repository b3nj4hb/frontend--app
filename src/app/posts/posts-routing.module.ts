import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePostComponent } from './presentation/pages/page-post/page-post.component';

const routes: Routes = [
  {path:'',component:PagePostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
