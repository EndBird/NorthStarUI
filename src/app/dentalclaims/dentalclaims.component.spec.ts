import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalclaimsComponent } from './dentalclaims.component';

describe('DentalclaimsComponent', () => {
  let component: DentalclaimsComponent;
  let fixture: ComponentFixture<DentalclaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalclaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
