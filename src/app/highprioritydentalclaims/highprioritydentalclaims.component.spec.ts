import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighprioritydentalclaimsComponent } from './highprioritydentalclaims.component';

describe('HighprioritydentalclaimsComponent', () => {
  let component: HighprioritydentalclaimsComponent;
  let fixture: ComponentFixture<HighprioritydentalclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighprioritydentalclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighprioritydentalclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
