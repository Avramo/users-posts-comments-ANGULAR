import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostAndCommentService } from 'src/app/services/post-and-comment.service';
import { ReplaySubject, Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postSelf:Post

  //for all of this users comment
  private usersCommentsSubj:ReplaySubject<Comment[]> = new ReplaySubject<Comment[]>(1);
  public commentsArrObs:Observable<Comment[]> = this.usersCommentsSubj as Observable<Comment[]>;

  constructor( private postAndCommSVC:PostAndCommentService) {

  }

  ngOnInit() {
    this.postAndCommSVC.getMyComments(this.postSelf.id).subscribe(
      (myComments:Comment[]) => { 
        this.usersCommentsSubj.next(myComments);
        console.log("your comments have arrived!!!");
        
      }
    )
  }

}
