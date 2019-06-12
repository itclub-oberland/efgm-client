import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfragenComponent } from './anfragen.component';

describe('AnfragenComponent', () => {
  let component: AnfragenComponent;
  let fixture: ComponentFixture<AnfragenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnfragenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
