import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ExampleService {

  requestUrl: string = 'https://jsonbin.org/chrischiang410/exampleList';

  constructor(protected http: HttpClient,) { }

  getCustomHeaders() {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const options = { headers: headers };
    return options;
  }

  getList(): Observable<any>  {
    return this.http.get(this.requestUrl, this.getCustomHeaders());
  }

}
