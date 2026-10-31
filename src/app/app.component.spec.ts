import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app.component';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the app name in the h1', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Receptari');
  });

  it('should list all the recipes at start', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const targetes = (fixture.nativeElement as HTMLElement).querySelectorAll('app-recepta-card');
    expect(targetes.length).toBe(12);
  });
});