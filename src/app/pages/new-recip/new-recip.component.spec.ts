import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipComponent } from './new-recip.component';

describe('NewRecipComponent', () => {
  let component: NewRecipComponent;
  let fixture: ComponentFixture<NewRecipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRecipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
