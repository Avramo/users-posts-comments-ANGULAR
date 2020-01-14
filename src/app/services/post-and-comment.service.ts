import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Post } from '../models/post';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostAndCommentService {


  constructor( private http:HttpClient , private router:Router ) { 
    this.router.events.subscribe(
      (routerEvent) =>{
        if (routerEvent instanceof NavigationEnd){
          console.log('routerEvent, isLoggedIn: ', this.isLoggedIn, ' url: ', this.router.url);
          
          if (this.router.url.includes('login') == false) {
            if (this.isLoggedIn == false) {
              alert('hey! you must login first!')
              this.router.navigateByUrl('login')
            }
          }
        }
      }
    )
  }

  isLoggedIn:boolean = false

  //for all of this users posts
  private usersPostsSubj:ReplaySubject<Post[]> = new ReplaySubject<Post[]>(1);
  public postsArrObs:Observable<Post[]> = this.usersPostsSubj as Observable<Post[]>;
  

  private baseAPI = 'http://localhost:3000/';

  getMyPosts(thisUserId:number){
    return this.http.get(this.baseAPI + 'posts?filter[where][userId]=' + thisUserId)
      .pipe(
        tap(
         ()=> console.log("PostAndCommentService getMyPosts() for userId: " , thisUserId)
        )//end tap
      )//end pipe
      .subscribe(
        (myPosts:Post[]) => { 
          this.usersPostsSubj.next(myPosts);
          console.log("your posts have arrived!!!");
          
        }
      )
  }

  getMyComments(forPostId:number){
    return this.http.get(this.baseAPI + 'comments?filter[where][postId]=' + forPostId)
      .pipe(
        tap(
         ()=> console.log("PostAndCommentService getMyComments() for postId: " , forPostId)
        )//end tap
      )//end pipe
  }

  logoff(){
    this.isLoggedIn = false;
    this.usersPostsSubj.next([])
    console.log('logoff usersPostsSubj = ', this.usersPostsSubj);
    
    this.router.navigateByUrl('login');
  }
}
