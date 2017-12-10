import { Component, OnInit } from '@angular/core';

import { ExampleService } from './example/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Chris first project';
  dataList;

  constructor(private eService: ExampleService) { }

  ngOnInit() {
    this.getBook();
  }

  getBook(){
    this.eService.getList().subscribe(res=>{
      this.dataList = res.data;
    });
  }

}
