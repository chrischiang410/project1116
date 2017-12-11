import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { NovelComponent } from './novel/novel.component';
import { ComicComponent } from './comic/comic.component';
import { MagazineComponent } from './magazine/magazine.component';


const routes: Routes = [
  { path: '', component: null,
    children: [
      { path: '', redirectTo: 'novel', pathMatch: 'full' },
      { path: 'novel', component:  NovelComponent},
      { path: 'comic', component: ComicComponent},
      { path: 'magazine', component: MagazineComponent},
      { path: '**', redirectTo: 'novel'}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ExampleRoutingModule { }
