import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { ExampleService } from './example/example.service';
import { Observable } from 'rxjs/Rx';

describe('AppComponent', () => {

  beforeEach(async(() => {

    const fakeService = {
      getList: () => {
        return Observable.of({
          "returnCode": 200,
          "data": [
            {
              "bookname": "Titanic",
              "price": 900
            },
            {
              "bookname": "Once",
              "price": 580
            }
          ]
        })
      }
    };

    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: ExampleService, useValue: fakeService }]
    }).compileComponents();


  }));

  /**
   * TestBed
   */
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /**
   * async
   */
  it(`should have the custom title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Chris\' Book Store');
  }));

  /**
   * Html
   */
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h1')[0].textContent)
      .toContain('Chris\' Book Store');
  }));

  /**
   * Html
   */
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h1')[0].textContent).toContain('Welcome to Chris first project');
  }));

  /**
   * Html
   */
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h1')[0].textContent).toContain('Welcome to Chris first project');
  }));

});
