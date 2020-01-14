import { Component, OnInit } from '@angular/core';
import { PostAndCommentService } from 'src/app/services/post-and-comment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private postAndCommSVC:PostAndCommentService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    let userID = document.querySelector('input').valueAsNumber;
    console.log(userID);
    
    if (userID > 0 && userID < 11) {
      this.postAndCommSVC.isLoggedIn = true;
      this.postAndCommSVC.getMyPosts(userID)
      this.router.navigateByUrl('postsPage')
    } 
    else{
      alert("Incorrect ID, Try again.")
      userID = 0;
    }
  }

}
