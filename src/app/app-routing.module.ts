import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommentsPage } from '../components/comments/comments-page';
import { ItemPage } from '../components/item-page/item-page';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  {
    path: 'items',
    component: ItemPage,

    children: [
      { path: ':id/comments', component: CommentsPage }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
