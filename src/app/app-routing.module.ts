import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {DefaultComponent} from './layouts/default/default.component';
import {PostsComponent} from  './modules/posts/posts.component';
import{NormalComponent} from './loop/normal/normal.component';
import{CreateComponent} from './new/create/create.component';
import {ShowComponent} from './view/show/show.component';
import{ViewComponent} from './detail/view/view.component'
const routes: Routes =[{
  path:'',
  component:NormalComponent,
  children:[{
    path:'createBooks',
    component:CreateComponent,
    },
    {
      path:'showAuthorList',
      component:ShowComponent,
      },
      {
        path:'showDetails', 
        component:ViewComponent,
        },
    {
  path:'default',
  component:DefaultComponent,
  },{
    path:'dashboard',
    component:DashboardComponent
  },{
    path:'posts',
    component: PostsComponent
  },{
    path:'api/employees',
    component:DefaultComponent
  }]
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
