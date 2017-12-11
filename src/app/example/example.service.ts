import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ExampleService {

  novelUrl: string = 'https://jsonbin.org/chrischiang410/getNovelList';
  comicUrl: string = 'https://jsonbin.org/chrischiang410/getComicList';
  magUrl: string = 'https://jsonbin.org/chrischiang410/getMagList';

  constructor(protected http: HttpClient,) { }

  // getCustomHeaders() {
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   const options = { headers: headers };
  //   return options;
  // }

  getNovel(): Observable<any>  {
    return this.http.get(this.novelUrl);
  }

}
