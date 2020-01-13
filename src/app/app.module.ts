import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './comps/pages/login/login.component';
import { PostsPageComponent } from './comps/pages/posts-page/posts-page.component';
import { PostComponent } from './comps/items/post/post.component';
import { CommentComponent } from './comps/items/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsPageComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
