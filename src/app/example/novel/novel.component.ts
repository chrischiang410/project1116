import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})
export class NovelComponent implements OnInit {

  novelList: any[] = [];

  constructor(private eService:ExampleService) { }

  ngOnInit() {
    this.getNovel();
  }

  getNovel(){
    this.eService.getNovel().subscribe((res)=>{
      this.novelList = res.data;
    });
  }

}
