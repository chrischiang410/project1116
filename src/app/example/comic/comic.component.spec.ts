import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleService } from '../example.service';

import { ComicComponent } from './comic.component';
import { Observable } from 'rxjs/Rx';

describe('ComicComponent', () => {
  let component: ComicComponent;
  let fixture: ComponentFixture<ComicComponent>;
  const fakeService = {
    getComic: () => {
      return Observable.of({
        "returnCode": 200,
        "data": [
          {
            "bookname": "One Piece",
            "price": 120
          },
          {
            "bookname": "Naruto",
            "price": 120
          },
          {
            "bookname": "Hunter",
            "price": 150
          }
        ]
      })
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComicComponent],
      providers: [{ provide: ExampleService, useValue: fakeService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
