import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulltransactionComponent } from './fulltransaction.component';

describe('FulltransactionComponent', () => {
  let component: FulltransactionComponent;
  let fixture: ComponentFixture<FulltransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulltransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulltransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
