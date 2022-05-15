import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { Card1Component } from './modules/card1/card1.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    
    path:'',
    component:DashboardComponent,
  },{
    path:'posts',
    component:PostsComponent,    
  },{
    path:'card1',
    component:Card1Component}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
