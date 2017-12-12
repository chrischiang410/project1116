import { Component, OnInit } from '@angular/core';

import { ExampleService } from '../example.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  comicList :any[] = [];

  constructor(private eService:ExampleService) { }

  ngOnInit() {
    this.getComic();
  }

  getComic(){
    this.eService.getComic().subscribe(res=>{
      this.comicList = res.data;
    });
  }

}
