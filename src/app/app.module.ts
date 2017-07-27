import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';

import { ItemService } from '../providers/item.service';

import { AppComponent } from './app.component';
import { NavBar } from '../components/nav-bar/nav-bar';
import { ItemPage } from '../components/item-page/item-page';
import { ItemForm } from '../components/item-form/item-form';
import { ItemList } from '../components/item-list/item-list';
import { CommentsPage } from '../components/comments/comments-page';
import { CommentsForm } from '../components/comments-form/comments-form';
import { CommentsList } from '../components/comments-list/comments-list';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    ItemPage,
    ItemForm,
    ItemList,
    CommentsPage,
    CommentsList,
    CommentsForm
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule
  ],

  providers: [ItemService],

  bootstrap: [AppComponent]
})
export class AppModule { }
