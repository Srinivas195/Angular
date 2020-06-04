import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBeneficiaryComponent } from './list-of-beneficiary.component';

describe('ListOfBeneficiaryComponent', () => {
  let component: ListOfBeneficiaryComponent;
  let fixture: ComponentFixture<ListOfBeneficiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBeneficiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBeneficiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
