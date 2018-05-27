import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PDMtoBOMComponent } from './pdmto-bom.component';

describe('PDMtoBOMComponent', () => {
  let component: PDMtoBOMComponent;
  let fixture: ComponentFixture<PDMtoBOMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PDMtoBOMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PDMtoBOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
