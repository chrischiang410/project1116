import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ExampleService } from '../example.service';

import { MagazineComponent } from './magazine.component';
import { Observable } from 'rxjs/Rx';

describe('MagazineComponent', () => {
  let component: MagazineComponent;
  let fixture: ComponentFixture<MagazineComponent>;
  const fakeService = {
    getMag: () => {
      return Observable.of({
        "returnCode": 200,
        "data": [
          {
            "bookname": "GQ",
            "price": 550
          },
          {
            "bookname": "Apple Daily",
            "price": 780
          },
          {
            "bookname": "Finance City",
            "price": 850
          }
        ]
      })
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MagazineComponent],
      providers: [{ provide: ExampleService, useValue: fakeService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
