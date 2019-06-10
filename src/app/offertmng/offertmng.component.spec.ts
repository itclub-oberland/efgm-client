import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffertmngComponent } from './offertmng.component';

describe('OffertmngComponent', () => {
  let component: OffertmngComponent;
  let fixture: ComponentFixture<OffertmngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffertmngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffertmngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
