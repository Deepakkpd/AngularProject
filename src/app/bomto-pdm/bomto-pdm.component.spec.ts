import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BOMtoPDMComponent } from './bomto-pdm.component';

describe('BOMtoPDMComponent', () => {
  let component: BOMtoPDMComponent;
  let fixture: ComponentFixture<BOMtoPDMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BOMtoPDMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BOMtoPDMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
