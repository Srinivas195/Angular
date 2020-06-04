import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetnewsComponent } from './getnews.component';

describe('GetnewsComponent', () => {
  let component: GetnewsComponent;
  let fixture: ComponentFixture<GetnewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
