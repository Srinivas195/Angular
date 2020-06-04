import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCustomerFulldetailsComponent } from './view-customer-fulldetails.component';

describe('ViewCustomerFulldetailsComponent', () => {
  let component: ViewCustomerFulldetailsComponent;
  let fixture: ComponentFixture<ViewCustomerFulldetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCustomerFulldetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCustomerFulldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
