import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title Demonstration Test Cases`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toContain('Demonstration Test Cases');
  });

  it('should load initial 3 issues', () => {
    const comp = new AppComponent();
    expect(comp.issues.length).toBe(3);
  });

  it('should have 4 issues after adding an issue', () => {
    const comp = new AppComponent();
    comp.issueDescription = 'Issue Description 4';
    comp.issueSeverity = 'Critical';
    comp.issueStatus = 'Open';
    comp.onFormSubmit();
    expect(comp.issues.length).toBe(4);
  });

  // it('should render table', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   console.log(compiled.querySelector('.container .row table tr'));
  //   expect(compiled.querySelector('.container .row table tr').length).toEqual(
  //     4
  //   );
  // });
});
