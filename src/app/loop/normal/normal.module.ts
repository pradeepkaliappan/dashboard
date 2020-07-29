import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NormalComponent} from './normal.component';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {DefaultComponent} from '../../layouts/default/default.component';
import {PostsComponent} from '../../modules/posts/posts.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule,MatCardModule,MatDividerModule} from '@angular/material';


@NgModule({
  declarations: [
    NormalComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class NormalModule { }
