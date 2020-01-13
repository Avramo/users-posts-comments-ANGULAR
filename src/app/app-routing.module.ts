import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsPageComponent } from './comps/pages/posts-page/posts-page.component';
import { LoginComponent } from './comps/pages/login/login.component';


const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "postsPage", component:PostsPageComponent},
  
  {path:'', redirectTo:"login", pathMatch:"full"},
  {path:'**', redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
