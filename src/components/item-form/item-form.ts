import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'item-form',
  templateUrl: './item-form.html',
  styleUrls: ['./item-form.css']
})
export class ItemForm {
  title: string;

  @Output() add = new EventEmitter();

  addItem() {
    const title = this.title.trim();

    if (!title) { return }

    this.add.emit({ title })
    this.title = '';
  }
}
