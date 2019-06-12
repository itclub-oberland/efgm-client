import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GMComponent } from './persondetail.component';

describe('GMComponent', () => {
  let component: GMComponent;
  let fixture: ComponentFixture<GMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
