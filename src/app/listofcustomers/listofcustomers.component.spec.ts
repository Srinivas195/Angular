import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofcustomersComponent } from './listofcustomers.component';

describe('ListofcustomersComponent', () => {
  let component: ListofcustomersComponent;
  let fixture: ComponentFixture<ListofcustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofcustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofcustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
