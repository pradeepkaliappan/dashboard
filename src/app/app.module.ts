import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { NormalComponent } from './loop/normal/normal.component';
import {NormalModule} from './loop/normal/normal.module';
import{MatDividerModule} from '@angular/material';
import{FlexLayoutModule} from '@angular/flex-layout';
import { CreateComponent } from './new/create/create.component';
import { ShowComponent } from './view/show/show.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './detail/view/view.component'


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    CreateComponent,
    ShowComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    //DefaultModule,
    AppRoutingModule,
    HttpClientModule,
    NormalModule,
    MatDividerModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
