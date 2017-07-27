import { Component } from '@angular/core';

import { ItemService, PersistedItem } from '../../providers/item.service';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.css']
})
export class ItemList {
  throttle = 300;
  scrollDistance = 20;
  items: PersistedItem[] = [];
  allItems: PersistedItem[] = [];
  page = 0;
  pageSize = 10;

  constructor(private service: ItemService) {}

  loadNextPageItem() {
    this.page++

    const startIndex = (this.page - 1) * this.pageSize;
    this.items = this.items.concat(this.allItems.slice(startIndex, startIndex + this.pageSize));
  }

  push(item) {
    this.service.create(item)
      .then(item => this.items.unshift(item))
  }

  remove(item) {
    this.service.remove(item)
      .then(() => {
        const index = this.items.findIndex(persistedItem => persistedItem.id === item.id);
        this.items.splice(index, 1);
      })
  }

  ngOnInit() {
    this.service.findAll()
      .then(items => {
        this.allItems = items
        this.loadNextPageItem()
      })
  }
}
