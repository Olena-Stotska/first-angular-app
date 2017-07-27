import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ItemService, PersistedItem, Comment } from '../../providers/item.service';

@Component({
  selector: 'comments-list',
  templateUrl: 'comments-list.html',
  styleUrls: ['comments-list.css'],
})
export class CommentsList {
  throttle = 300;
  scrollDistance = 20;
  comments: Comment[] = [];

  page = 0;
  pageSize = 10;

  @Input() item: PersistedItem;

  constructor(private service: ItemService) {}

  loadNextPage() {
    this.page++

    const startIndex = (this.page - 1) * this.pageSize
    this.comments =this.comments.concat(this.item.comments.slice(startIndex, startIndex + this.pageSize));
  }

  getRandom() {
    return '#'+((1<<24)*Math.random()|0).toString(16);
  }

  push(comment) {
    comment.color = this.getRandom()
    this.service.createComment(this.item, comment)
      .then(comment => this.comments.unshift(comment));
  }

  ngOnChanges(changes) {
    if ('item' in changes) {
      this.page = 0;
      this.comments = [];

      if (changes.item.currentValue) {
        this.loadNextPage();
      }
    }
  }
}
