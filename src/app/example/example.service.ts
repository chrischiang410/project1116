import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ExampleService {

  novelUrl: string = 'https://jsonbin.org/chrischiang410/getNovelList';
  comicUrl: string = 'https://jsonbin.org/chrischiang410/getComicList';
  magUrl: string = 'https://jsonbin.org/chrischiang410/getMagList';

  constructor(protected http: HttpClient) { }

  getNovel(): Observable<any>  {
    return this.http.get(this.novelUrl);
  }

  getComic(): Observable<any>  {
    return this.http.get(this.comicUrl);
  }

  getMag(): Observable<any>  {
    return this.http.get(this.magUrl);
  }

}
