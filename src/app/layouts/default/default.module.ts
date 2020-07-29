import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DefaultComponent } from './default.component';
import {DashboardComponent } from '../../modules/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from '../../modules/posts/posts.component';
import {SharedModule} from '../../shared/shared.module';
import {MatSidenavModule} from '@angular/material';
import {MatCardModule,MatExpansionModule,MatInputModule} from '@angular/material';
import {FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {MatSelectModule,MatFormFieldModule} from '@angular/material';
import {MatTableModule,MatTabsModule,MatGridListModule,MatDialogModule} from '@angular/material';
import {DialogOverviewExampleDialog} from './default.component';
import {HttpModule} from '@angular/http';
import{BrowserModule} from '@angular/platform-browser';


@NgModule({
  declarations: [
    DefaultComponent,
    DialogOverviewExampleDialog 
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    RouterModule,
    MatSidenavModule,
    MatCardModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpModule
  ]
  
})
export class DefaultModule {
 }
