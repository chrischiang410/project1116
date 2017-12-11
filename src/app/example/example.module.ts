import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExampleService } from './example.service';

import { NovelComponent } from './novel/novel.component';
import { ComicComponent } from './comic/comic.component';
import { MagazineComponent } from './magazine/magazine.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NovelComponent, ComicComponent, MagazineComponent],
  providers: [ExampleService]
})
export class ExampleModule { }
