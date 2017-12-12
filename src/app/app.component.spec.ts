import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import { ExampleService } from './example/example.service';
import { Observable } from 'rxjs/Rx';

describe('AppComponent', () => {

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

  }));

  /**
   * TestBed (async)
   */
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /**
   * 驗證參數
   */
  it(`should have the custom title`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Chris\'');
  }));

  /**
   * 檢驗在Html上的值
   */
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h1')[0].textContent)
      .toContain('Chris\' Book Store');
  }));

  /**
   * 檢驗在Html上的值 part2
   */
  it('should render another title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const newStoreName = 'Chris & Mico\'s';
    app.title = newStoreName;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('h1')[0].textContent)
      .toContain('Chris & Mico\'s Book Store');
  }));

});
