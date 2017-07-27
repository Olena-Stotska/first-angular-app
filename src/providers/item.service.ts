import { Injectable } from '@angular/core';

export interface Item {
  title: string;
  comments?: Comment[];
}

export interface PersistedItem extends Item {
  id: number;
}

export interface Comment {
  text: string;
  color: string;
}

@Injectable()
export class ItemService {
  private items: PersistedItem[];

  constructor() {
    this.items = this.getItems();
  }

  private getItems(): PersistedItem[] {
    return localStorage.items ? JSON.parse(localStorage.items) : []
  }

  private saveItems() {
    localStorage.items = JSON.stringify(this.items);
  }

  findAll(): Promise<PersistedItem[]> {
    return Promise.resolve(this.items.slice(0));
  }

  create(item: Item): Promise<PersistedItem> {
    const newItem: PersistedItem = Object.assign({ comments: [], id: Date.now() }, item);

    console.log(newItem)
    this.items.unshift(newItem);
    this.saveItems();

    return Promise.resolve(newItem);
  }

  createComment(item: PersistedItem, comment: Comment): Promise<Comment> {
    item.comments.unshift(comment);
    this.saveItems();

    return Promise.resolve(comment);
  }

  remove(item: PersistedItem): Promise<PersistedItem> {
    const index = this.items.findIndex(storedItem => item.id === storedItem.id);
    let itemToRemove

    if (index !== -1) {
      itemToRemove = this.items[index];
      this.items.splice(index, 1);
      this.saveItems();
    }

    return Promise.resolve(itemToRemove)
  }

  findById(id: number | string): Promise<PersistedItem> {
    const itemId = Number(id);
    const item = this.items.find(item => itemId === item.id);

    if (item) {
      return Promise.resolve(item);
    } else {
      return Promise.reject(new Error('Not Found'));
    }
  }
}
