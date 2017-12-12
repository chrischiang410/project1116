import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-novel',
  template: `<h3>{{novelTitle}}：</h3>
  <div *ngFor="let item of novelList">
    <span>{{item.bookname}}</span>
    <span>$ {{item.price}}</span>
  </div>
  `,
  styles: [`
    div {
      width:40%
    }
    div > span:first-child {
      display: inline-block;
      width: 100px;
      text-align: left;
      margin-right: 5px;
    };
  `]
})
export class NovelComponent implements OnInit {

  novelTitle: string ;
  novelList: any[] = [];

  constructor(private eService:ExampleService) { }

  ngOnInit() {
    this.novelTitle = 'Top 3 Novels';
    this.getNovel();
  }

  getNovel(){
    this.eService.getNovel().subscribe((res)=>{
      this.novelList = res.data;
    });
  }

}
