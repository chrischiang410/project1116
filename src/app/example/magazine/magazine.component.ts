import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.css']
})
export class MagazineComponent implements OnInit {

  magList: any[] = [];

  constructor(private eService: ExampleService) { }

  ngOnInit() {
    this.getMag();
  }

  getMag() {
    this.eService.getMag().subscribe(res => {
      this.magList = res.data;
    });
  }

}
