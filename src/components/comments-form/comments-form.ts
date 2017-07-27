import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comments-form',
  templateUrl: 'comments-form.html',
  styleUrls: ['comments-form.css']
})
export class CommentsForm {
  body: string;

  @Output() add = new EventEmitter();

  addItem() {
    const text = this.body.trim();

    if (!text) { return }

    this.add.emit({ text })
    this.body = '';
  }
}
