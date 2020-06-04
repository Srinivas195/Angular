import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserrequestComponent } from './listuserrequest.component';

describe('ListuserrequestComponent', () => {
  let component: ListuserrequestComponent;
  let fixture: ComponentFixture<ListuserrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuserrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
