import { Component } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemService, PersistedItem } from '../../providers/item.service';

@Component({
  selector: 'comments-page',
  templateUrl: 'comments-page.html',
  styleUrls: ['comments-page.css']
})
export class CommentsPage {
  item: PersistedItem;

  constructor(private route: ActivatedRoute,
              private service: ItemService) {}

  ngOnInit() {
    this.route.paramMap
      .flatMap((params: ParamMap) => {
        const promise = this.service.findById(params.get('id'));
        return Observable.fromPromise(promise);
      })
      .subscribe((item: PersistedItem) => this.item = item);
  }
}
