import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelComponent } from './novel.component';

import { ExampleService } from './../example.service';
import { Observable } from 'rxjs/Rx';

describe('NovelComponent', () => {
  let component: NovelComponent;
  let fixture: ComponentFixture<NovelComponent>;
  const fakeService = {
    getNovel: () => {
      return Observable.of({
        "returnCode": 200,
        "data": [
          {
            "bookname": "Titanic",
            "price": 900
          },
          {
            "bookname": "Once",
            "price": 550
          },
          {
            "bookname": "Harry Potter",
            "price": 1380
          }
        ]
      })
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NovelComponent ],
      providers: [{ provide: ExampleService, useValue: fakeService }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
