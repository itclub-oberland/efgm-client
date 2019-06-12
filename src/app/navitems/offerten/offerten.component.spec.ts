import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertenComponent } from './offerten.component';

describe('OffertenComponent', () => {
  let component: OffertenComponent;
  let fixture: ComponentFixture<OffertenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
