import { Component, OnInit } from '@angular/core';
import { PostAndCommentService } from 'src/app/services/post-and-comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  constructor( private postAndCommSVC:PostAndCommentService) { }

  ngOnInit() {
  }

  logout(){
    this.postAndCommSVC.logoff()
  }

}